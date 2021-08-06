const app = require("../../config/server");

module.exports = app => {
    app.get('/', (req,res) => {
      res.render('index.ejs');  
    })
    
    app.get('/login', (req,res) => {
      res.render('login.ejs');  
    })
      
    app.get('/registro', (req,res)=>{
      res.render('registro.ejs')
    })

    app.get('/images', (req,res)=>{
      res.render('Images.ejs')
    })

    app.get('/inside', (req,res) => {
      res.render('inside.ejs');  
    })

    app.get('/registroActas', (req,res) => {
      res.render('registro_actas.ejs');  
    })

    app.get('/nuevosAfiliados', (req,res) => {
      res.render('registro_nue_afi.ejs');  
    })

    app.post('/registro', async (req,res) => {
      const {usuario,
            nombre,
            apellido,
            rol,
            contrasena} = req.body;
      console.log (req.body);

      let passwordHaash = await bcryptjs.hash(contrasena, 8);
      connection.query("INSERT INTO actores SET ?", {
        usuario: usuario,
        nombre: nombre,
        apellido: apellido,
        rol: rol,
        contrasena:passwordHaash
      },async(error,results) => {
        if(error){
          console.log(error);
        }else {
          res.render("/login");


          /*res.render('../views/register.ejs', {
            alert: true,
            alertTittle: "Registro Exitoso",
            alertIcon: "Exitoso",
            showConfirmButton: false,
            timer:2000,
            ruta: ''
          });*/
        }
      }) 

    })
}