const {body}= require('express-validator');

module.exports=[

body('name').notEmpty().withMessage('Debes ingresar un nombre'),

body('theme').notEmpty().withMessage('Debes seleccionar un color'),

body('email').notEmpty().whitMessage('Debes ingresar un email ')
            .isEmail().whitMessage('Debes ingresar un email válido'),

body('age').isInt() .whitMessage('El valor ingreado debe ser un número'),          
]

