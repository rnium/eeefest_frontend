import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ReduxProvider } from '@/redux/store';



export const metadata = {
    title: "TechnoVenture 3.0 Admin",
};



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
