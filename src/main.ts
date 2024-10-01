import { app, BrowserWindow } from 'electron';
import * as path from 'path';

/**
 * 메인 윈도우를 생성하는 함수
 * @description 이 함수는 Electron 앱의 메인 윈도우를 생성합니다.
 * BrowserWindow는 많이 사용하는 Electron의 핵심 클래스입니다.
 */
function createWindow() {
  // BrowserWindow 인스턴스 생성
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // dist/index.html 경로 확인
  const indexPath = path.join(__dirname, '../dist/index.html');
  console.log('Loading index file from:', indexPath); // 경로 확인을 위한 로그 추가
  win.loadFile(indexPath).catch(err => console.error('Failed to load index.html:', err)); // 에러 핸들링 추가

  // 개발 모드에서 DevTools 열기
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
}

/**
 * 앱이 준비되면 윈도우를 생성합니다.
 * @description app.whenReady()는 Electron 앱의 생명주기에서 중요한 메서드입니다.
 * 이 메서드는 앱이 초기화를 완료했을 때 호출됩니다.
 */
app.whenReady().then(createWindow);

/**
 * 모든 윈도우가 닫히면 앱을 종료합니다. (macOS 제외)
 * @description app.on('window-all-closed')는 모든 윈도우가 닫혔을 때 발생하는 이벤트를 처합니다.
 * 이는 앱의 정리 작업을 수행하는 데 중요합니다.
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * macOS에서 앱 아이콘을 클릭하면 새 윈도우를 생성합니다.
 * @description app.on('activate')는 macOS에서 중요한 이벤트 핸들러입니다.
 * Dock 아이콘 클릭 시 새 윈도우를 생성하는 macOS의 일반적인 동작을 구현합니다.
 */
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});