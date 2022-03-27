
import CONSTANTS from '../constants/index.js';

import UserRoutes from '../modules/user/user.routes'

const routes = (app)=>{
   
app.use(`${CONSTANTS.API_URI}/user`,UserRoutes);

// console.log(app , "::dddddddddd")
}
export default routes;
// Define Routes
