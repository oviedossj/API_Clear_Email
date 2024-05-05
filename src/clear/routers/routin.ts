import { Router,Response } from 'express';
import { gmailServices } from '@clear/services';
const router = Router();

// router.post('/checkout', authMiddleware, paymentController.checkout);
router.get('/into',  async (_req, res: Response) => {
    const users = 'Hello , you are into at future'
    res.send(users)
  }) 
  router.get('/info',  async (_req, res: Response) => {
    try {
        const Rto = await gmailServices.processEmails()
        return res.send('Correos encontrados. '+ Rto.length);
      
    } catch (error) {
        console.error('Error al obtener correos:', error);
        return res.status(500).send('Error al procesar su solicitud.');
    }
});
    // Ruta para eliminar emails
// router.get('/delete-emails',  async (_req, res: Response) => {
//     try {
//         // Se espera que los IDs de los emails vengan en el cuerpo de la solicitud, por ejemplo: { "emailIds": ["id1", "id2"] }
//         const emailIds  = await gmailRepositories.getAllEmails();
//         // Verifica que se haya proporcionado al menos un ID de correo
//         if (!emailIds || emailIds.length === 0)   return res.status(400).send('No se proporcionaron IDs de correo para eliminar.');
//         // Llama al método deleteEmails del servicio GmailService
//         await gmailRepositories.deleteEmails(emailIds);
//         res.send('Correos eliminados exitosamente.');
//     } catch (error) {
//         console.error('Error al eliminar correos:', error);
//         res.status(500).send('Error al procesar la solicitud de eliminación de correos.');
//     }
// });

export default router;
