const z = require("zod");
const bcrypt = require("bcrypt");
const Account = require("../../../models/Account");
const { signToken } = require("../../../middlewares/jsonwebtoken");

const FormSchema = z.object({
  email: z.string().email({
    message: 'Por favor, introduce una dirección de correo electrónico válida.',
  }),
  password: z.string()
})

async function login(request, response, next) {
  try {
    const { email, password } = request.body;
    // Validate request data
    FormSchema.parse({ email, password });

  } catch (error) {
    return response.status(400).json({
      error: "Error de validación login",
      message: error.message,
    });
  }

  try {
    const { email, password } = request.body;

    // Get account from DB, and verify existance
    const foundAccount = await Account.findOne({ email });
    if (!foundAccount) {
      const exists = true;
      return response.status(400).json({
        message: "Credenciala incorrecta",
        exists
      });
    }

    // Decrypt and verify password
    const passOk = await bcrypt.compare(password, foundAccount.password);
    if (!passOk) {
      return response.status(400).json({
        message: "Credenciala incorrecta",
      });
    }

    // Remove password from response data
    foundAccount.password = undefined;
    delete foundAccount.password;

    // Generate access token
    const token = signToken({ uid: foundAccount._id, role: foundAccount.role });

    response.status(200).json({
      message: "Se ha conectado correctamente",
      data: foundAccount,
      token,
    });
  } catch (error) {
    console.error(error);
    response.status(500).send();
  }
}

module.exports = login;
