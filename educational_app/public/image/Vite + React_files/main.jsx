import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4d7f4945"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=4d7f4945"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=4d7f4945"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/@fs/C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/App.jsx?t=1685628767069";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=4d7f4945";
import { HomeScreen, ProfileScreen, LoginAndRegisterScreen, DashBoard, FlashCardScreen, FlashCards, RegisterScreen, GenericFlashCard, ProgressScreen, BookMarkScreen, DeckScreen } from "/@fs/C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/screens/index.js?t=1685630388776";
import "/@fs/C:/Users/avnip/Desktop/Educational_App_Client/educational_app/node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "/@fs/C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/store.js";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=4d7f4945";
import PrivateRoute from "/@fs/C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/components/PrivateRoute/index.jsx";
const router = createBrowserRouter(createRoutesFromElements(/* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
  lineNumber: 10,
  columnNumber: 86
}, this), children: [
  /* @__PURE__ */ jsxDEV(Route, { index: true, path: "/", element: /* @__PURE__ */ jsxDEV(HomeScreen, {}, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 11,
    columnNumber: 45
  }, this) }, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(LoginAndRegisterScreen, {}, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 12,
    columnNumber: 37
  }, this) }, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "/register", element: /* @__PURE__ */ jsxDEV(RegisterScreen, {}, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 14,
    columnNumber: 40
  }, this) }, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "", element: /* @__PURE__ */ jsxDEV(PrivateRoute, {}, void 0, false, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 16,
    columnNumber: 31
  }, this), children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/profile", element: /* @__PURE__ */ jsxDEV(ProfileScreen, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 17,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/dashboard", element: /* @__PURE__ */ jsxDEV(DashBoard, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 18,
      columnNumber: 45
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/add-cards", element: /* @__PURE__ */ jsxDEV(FlashCardScreen, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 19,
      columnNumber: 45
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/flashcard/:id", element: /* @__PURE__ */ jsxDEV(FlashCards, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 20,
      columnNumber: 49
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/GenericFlashCard", element: /* @__PURE__ */ jsxDEV(GenericFlashCard, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 21,
      columnNumber: 52
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/progress", element: /* @__PURE__ */ jsxDEV(ProgressScreen, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 22,
      columnNumber: 44
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/bookmarks", element: /* @__PURE__ */ jsxDEV(BookMarkScreen, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 23,
      columnNumber: 45
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/deck/:category", element: /* @__PURE__ */ jsxDEV(DeckScreen, {}, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 24,
      columnNumber: 50
    }, this) }, void 0, false, {
      fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
  lineNumber: 10,
  columnNumber: 61
}, this)));
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
  lineNumber: 30,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
  lineNumber: 29,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/avnip/Desktop/Educational_App_Client/educational_app/src/main.jsx",
  lineNumber: 28,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,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Q0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJQSxDQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMiLCJSb3V0ZSIsIlJvdXRlclByb3ZpZGVyIiwiSG9tZVNjcmVlbiIsIlByb2ZpbGVTY3JlZW4iLCJMb2dpbkFuZFJlZ2lzdGVyU2NyZWVuIiwiRGFzaEJvYXJkIiwiRmxhc2hDYXJkU2NyZWVuIiwiRmxhc2hDYXJkcyIsIlJlZ2lzdGVyU2NyZWVuIiwiR2VuZXJpY0ZsYXNoQ2FyZCIsIlByb2dyZXNzU2NyZWVuIiwiQm9va01hcmtTY3JlZW4iLCJEZWNrU2NyZWVuIiwic3RvcmUiLCJQcm92aWRlciIsIlByaXZhdGVSb3V0ZSIsInJvdXRlciIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwiZmlsZSI6IkM6L1VzZXJzL2F2bmlwL0Rlc2t0b3AvRWR1Y2F0aW9uYWxfQXBwX0NsaWVudC9lZHVjYXRpb25hbF9hcHAvc3JjL21haW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHtcclxuICBjcmVhdGVCcm93c2VyUm91dGVyLFxyXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyxcclxuICBSb3V0ZSxcclxuICBSb3V0ZXJQcm92aWRlcixcclxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7SG9tZVNjcmVlbiwgUHJvZmlsZVNjcmVlbiwgTG9naW5BbmRSZWdpc3RlclNjcmVlbiwgRGFzaEJvYXJkLCBGbGFzaENhcmRTY3JlZW4sIEZsYXNoQ2FyZHMgLCBSZWdpc3RlclNjcmVlbiwgR2VuZXJpY0ZsYXNoQ2FyZCAsUHJvZ3Jlc3NTY3JlZW4sIEJvb2tNYXJrU2NyZWVuLERlY2tTY3JlZW59IGZyb20gJy4vc2NyZWVucyc7XHJcblxyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuXHJcblxyXG5pbXBvcnQgUHJpdmF0ZVJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9Qcml2YXRlUm91dGUvaW5kZXgnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFxyXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyhcclxuICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXs8QXBwIC8+fT5cclxuICAgICAgPFJvdXRlIGluZGV4PXt0cnVlfSBwYXRoPScvJyBlbGVtZW50PXs8SG9tZVNjcmVlbiAvPn0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgZWxlbWVudD17PExvZ2luQW5kUmVnaXN0ZXJTY3JlZW4gLz59IC8+XHJcblxyXG4gICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdGVyJyBlbGVtZW50PXs8UmVnaXN0ZXJTY3JlZW4gLz59IC8+XHJcbiAgICAgIFxyXG4gICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8UHJpdmF0ZVJvdXRlIC8+fT5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2ZpbGUnIGVsZW1lbnQ9ezxQcm9maWxlU2NyZWVuIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9kYXNoYm9hcmQnIGVsZW1lbnQ9ezxEYXNoQm9hcmQgLz59IC8+IFxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQtY2FyZHMnIGVsZW1lbnQ9ezxGbGFzaENhcmRTY3JlZW4gLz59IC8+IFxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9mbGFzaGNhcmQvOmlkJyBlbGVtZW50PXs8Rmxhc2hDYXJkcyAvPn0gLz4gXHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL0dlbmVyaWNGbGFzaENhcmQnIGVsZW1lbnQ9ezxHZW5lcmljRmxhc2hDYXJkIC8+fSAvPiBcclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvZ3Jlc3MnIGVsZW1lbnQ9ezxQcm9ncmVzc1NjcmVlbiAvPn0gLz4gXHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2Jvb2ttYXJrcycgZWxlbWVudD17PEJvb2tNYXJrU2NyZWVuIC8+fSAvPiBcclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPSAnL2RlY2svOmNhdGVnb3J5JyBlbGVtZW50PXs8RGVja1NjcmVlbiAvPn0gLz4gXHJcbiAgICAgIDwvUm91dGU+IFxyXG5cclxuICAgIDwvUm91dGU+XHJcbiAgKVxyXG4pXHJcblxyXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgPC9Qcm92aWRlcj5cclxuKVxyXG4iXX0=