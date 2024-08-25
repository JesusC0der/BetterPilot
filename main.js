import { app, BrowserWindow, globalShortcut, screen } from 'electron';
import path from 'path'
import { fileURLToPath } from 'url';

let win;

function createWindow() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({
        resizable: false,
        moveable: false,
        roundedCorners: 500,
        frame: false,
        x: Math.floor(width - 390),
        y: 5,
        width: width * 0.2,
        height: Math.floor(height * 0.993),
        icon: path.join(__dirname, 'assets', 'logo.ico'),
        webPreference: {
            nodeIntegration: true
        }
    });
    
    win.loadURL('https://edgeservices.bing.com/edgesvc/chat?udsframed=1&form=SHORUN&clientscopes=chat,noheader,udsedgeshop,channelbeta,ntpquery,devtoolsapi,udsinwin11,udsdlpconsent,udscstart,cspgrd,&shellsig=b975e0cc5a474706873839a00fcbbcdabcd6c864&setlang=en-US&darkschemeovr=1&udsps=0&udspp=0');
    win.setAlwaysOnTop(true)
}

app.whenReady().then(() => {
    globalShortcut.register('Alt+Shift+C', () => {
        if (win.isVisible()) {
            win.hide();
        } else {
            win.show();
        }
    })
}).then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});