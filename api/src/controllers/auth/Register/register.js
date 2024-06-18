const z = require("zod");
const bcrypt = require("bcrypt");
const Account = require("../../../models/Account");
const { signToken } = require("../../../middlewares/jsonwebtoken");


const FormSchema = z.object({
  email: z.string().email({
    message: 'Por favor, introduce una dirección de correo electrónico válida.',
  }),
  password: z.string().refine((value) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return (
      uppercaseRegex.test(value) &&
      specialCharRegex.test(value) &&
      value.length >= 8
    );
  }, {
    message: 'La contraseña debe contener al menos 1 letra mayúscula, 1 carácter especial y tener al menos 8 caracteres.',
  }),
  name: z.string(),
  role: z.string(),
})

async function register(request, response, next) {
  const { email, password, name, role } = request.body;
  try {
    // Validate request data
    FormSchema.parse({ email, password, name, role });

  } catch (error) {
    return response.status(400).json({
      error: "Error de validación Resgistro",
      message: error.message,
    });
  }

  try {
    const { name, password, email } = request.body;
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return response.status(400).json({
        error: email,
        message: 'Ya existe una cuenta con ese correo',
      });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create account
    const newAccount = new Account({ name, password: hash, email });
    await newAccount.save();

    // Remove password from response data
    newAccount.password = undefined;
    delete newAccount.password;

    // Generate access token
    const token = signToken({ uid: newAccount._id, role: newAccount.role });

    response.status(201).json({
      message: "Registrado con éxito",
      data: newAccount,
      token,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Error al crear el usuario",
      message: error.message,
    });
  }
}


module.exports = { register };
