import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../pages/';
import { NotFound404 } from '../pages/NotFound404';
import { OtroEnrutador } from './OtroEnrutador';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>

                <Route path='/signin' element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />

                <Route path='/signup' element={
                    <PublicRoutes>
                        <RegisterScreen/>
                    </PublicRoutes>
                } />


                <Route path='/*' element={
                    <PrivateRoutes>
                       <OtroEnrutador />
                    </PrivateRoutes>
                } />

                <Route path='/*' element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    )
}
