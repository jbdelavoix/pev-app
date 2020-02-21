const {
  app,
  BrowserWindow,
  Menu
} = require("electron")

let mainWindow = null

app.on("window-all-closed", function () {
  if (process.platform != "darwin")
    app.quit()
  app.quit()
})

let template = [{
    label: "Home",
    submenu: [{
        role: "about"
      },
      {
        type: "separator"
      },
      {
        label: "Services",
        submenu: []
      },
      {
        type: "separator"
      },
      {
        role: "hide"
      },
      {
        role: "hideOthers"
      },
      {
        role: "unhide"
      },
      {
        type: "separator"
      },
      {
        role: "quit"
      },
    ]
  },
  {
    label: "Edit",
    submenu: [{
        role: "undo"
      },
      {
        role: "redo"
      },
      {
        type: "separator"
      },
      {
        role: "cut"
      },
      {
        role: "copy"
      },
      {
        role: "paste"
      }
    ]
  }, {
    label: "View",
    submenu: [{
        role: "reload"
      },
      {
        role: "toggledevtools"
      },
      {
        type: "separator"
      },
      {
        role: "resetzoom"
      },
      {
        role: "zoomin"
      },
      {
        role: "zoomout"
      },
      {
        type: "separator"
      },
      {
        role: "togglefullscreen"
      }
    ]
  }, {
    role: "window",
    submenu: [{
        role: "minimize"
      },
      {
        role: "close"
      }
    ]
  }, {
    role: "help",
    submenu: [{
      label: "Learn More"
    }]
  }
]

menu = Menu.buildFromTemplate(template)

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: false
    }
  })

  mainWindow.loadURL(`file://${__dirname}/pev/index.html`)

  Menu.setApplicationMenu(menu)

  mainWindow.on("close", function () {
    if (process.platform != "darwin") {
      mainWindow = null
    } else {
      mainWindow = null
    }
  })
}

app.on("ready", createWindow)
