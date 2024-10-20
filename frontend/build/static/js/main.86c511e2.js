/*! For license information please see main.86c511e2.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          o = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          j = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          F = Object.assign;
        function B(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var U = !1;
        function I(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  s = a.length - 1;
                1 <= i && 0 <= s && o[i] !== a[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || o[i] !== a[s])) {
                        var l = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case _:
              return "Profiler";
            case E:
              return "StrictMode";
            case R:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case j:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ae(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          Ee = null;
        function _e(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof xe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = xo(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Re() {}
        var Te = !1;
        function Pe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Te = !1), (null !== Se || null !== Ee) && (Re(), Ne());
          }
        }
        function je(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Le = !1;
          }
        function ze(e, t, n, r, o, a, i, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Fe = null,
          Be = !1,
          Ue = null,
          Ie = {
            onError: function (e) {
              (De = !0), (Fe = e);
            },
          };
        function Me(e, t, n, r, o, a, i, s, l) {
          (De = !1), (Fe = null), ze.apply(Ie, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (qe(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return He(o), e;
                    if (i === r) return He(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Ge = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Je = o.unstable_now,
          Xe = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~o;
            0 !== s ? (r = dt(s)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          Et,
          _t,
          Ct = !1,
          Nt = [],
          Ot = null,
          Rt = null,
          Tt = null,
          Pt = new Map(),
          jt = new Map(),
          Lt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Rt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              jt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ft(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function It() {
          (Ct = !1),
            null !== Ot && Bt(Ot) && (Ot = null),
            null !== Rt && Bt(Rt) && (Rt = null),
            null !== Tt && Bt(Tt) && (Tt = null),
            Pt.forEach(Ut),
            jt.forEach(Ut);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, It)));
        }
        function qt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Nt.length) {
            Mt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Mt(Ot, e),
              null !== Rt && Mt(Rt, e),
              null !== Tt && Mt(Tt, e),
              Pt.forEach(t),
              jt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var o = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = o), (Vt.transition = a);
          }
        }
        function $t(e, t, n, r) {
          var o = bt,
            a = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = o), (Vt.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Ht) {
            var o = Gt(e, t, n, r);
            if (null === o) Hr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Ot = Dt(Ot, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Rt = Dt(Rt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Tt = Dt(Tt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Pt.set(a, Dt(Pt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      jt.set(a, Dt(jt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && kt(a),
                  null === (a = Gt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = ke(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            o = "value" in Jt ? Jt.value : Jt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = F({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = on(pn),
          mn = on(F({}, pn, { dataTransfer: 0 })),
          gn = on(F({}, dn, { relatedTarget: 0 })),
          yn = on(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          wn = on(F({}, un, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function _n() {
          return En;
        }
        var Cn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = on(Cn),
          On = on(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Rn = on(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          Tn = on(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          jn = on(Pn),
          Ln = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Dn = c && "TextEvent" in window && !zn,
          Fn = c && (!An || (zn && 8 < zn && 11 >= zn)),
          Bn = String.fromCharCode(32),
          Un = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Qn = null;
        function Kn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (Q(ko(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Qn)) {
            var t = [];
            Wn(t, Qn, e, ke(e)), Pe(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Qn);
        }
        function ar(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = $r(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function _r(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Cr = _r("animationend"),
          Nr = _r("animationiteration"),
          Or = _r("animationstart"),
          Rr = _r("transitionend"),
          Tr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function jr(e, t) {
          Tr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var Ar = Pr[Lr];
          jr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        jr(Cr, "onAnimationEnd"),
          jr(Nr, "onAnimationIteration"),
          jr(Or, "onAnimationStart"),
          jr("dblclick", "onDoubleClick"),
          jr("focusin", "onFocus"),
          jr("focusout", "onBlur"),
          jr(Rr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, s, l, u) {
              if ((Me.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = Fe;
                (De = !1), (Fe = null), Be || ((Be = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && o.isPropagationStopped()))
                    break e;
                  Fr(o, s, u), (a = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && o.isPropagationStopped())
                  )
                    break e;
                  Fr(o, s, u), (a = l);
                }
            }
          }
          if (Be) throw ((e = Ue), (Be = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = $t;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = bo(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = a = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = a,
              o = ke(n),
              i = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Rn;
                    break;
                  case Cr:
                  case Nr:
                  case Or:
                    l = yn;
                    break;
                  case Rr:
                    l = Tn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = On;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = je(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  i.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (d = qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : ko(l)),
                  (p = null == u ? s : ko(u)),
                  ((s = new c(m, h + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = l; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(i, s, l, c, !1),
                  null !== u && null !== d && Kr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? ko(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Yn;
              else if (Hn(s))
                if (Jn) g = ir;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, o)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? ko(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var v;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = en())
                    : ((Xt = "value" in (Jt = o) ? Jt.value : Jt.textContent),
                      (qn = !0))),
                0 < (y = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Mn(n)) && (b.data = v))),
                (v = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!An && In(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Br(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = je(e, n)) && r.unshift(Wr(e, a, o)),
              null != (a = je(e, t)) && r.push(Wr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = je(n, a)) && i.unshift(Wr(n, l, s))
                : o || (null != (l = je(n, a)) && i.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          qt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          yo = "__reactListeners$" + fo,
          vo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ko(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function xo(e) {
          return e[ho] || null;
        }
        var So = [],
          Eo = -1;
        function _o(e) {
          return { current: e };
        }
        function Co(e) {
          0 > Eo || ((e.current = So[Eo]), (So[Eo] = null), Eo--);
        }
        function No(e, t) {
          Eo++, (So[Eo] = e.current), (e.current = t);
        }
        var Oo = {},
          Ro = _o(Oo),
          To = _o(!1),
          Po = Oo;
        function jo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Oo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Lo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ao() {
          Co(To), Co(Ro);
        }
        function zo(e, t, n) {
          if (Ro.current !== Oo) throw Error(a(168));
          No(Ro, t), No(To, n);
        }
        function Do(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, V(e) || "Unknown", o));
          return F({}, n, r);
        }
        function Fo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Oo),
            (Po = Ro.current),
            No(Ro, e),
            No(To, To.current),
            !0
          );
        }
        function Bo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Do(e, t, Po)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Co(To),
              Co(Ro),
              No(Ro, e))
            : Co(To),
            No(To, n);
        }
        var Uo = null,
          Io = !1,
          Mo = !1;
        function qo(e) {
          null === Uo ? (Uo = [e]) : Uo.push(e);
        }
        function Vo() {
          if (!Mo && null !== Uo) {
            Mo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Uo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Uo = null), (Io = !1);
            } catch (o) {
              throw (null !== Uo && (Uo = Uo.slice(e + 1)), Qe(Ze, Vo), o);
            } finally {
              (bt = t), (Mo = !1);
            }
          }
          return null;
        }
        var Ho = [],
          Wo = 0,
          $o = null,
          Qo = 0,
          Ko = [],
          Go = 0,
          Yo = null,
          Jo = 1,
          Xo = "";
        function Zo(e, t) {
          (Ho[Wo++] = Qo), (Ho[Wo++] = $o), ($o = e), (Qo = t);
        }
        function ea(e, t, n) {
          (Ko[Go++] = Jo), (Ko[Go++] = Xo), (Ko[Go++] = Yo), (Yo = e);
          var r = Jo;
          e = Xo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Jo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Xo = a + e);
          } else (Jo = (1 << a) | (n << o) | r), (Xo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === $o; )
            ($o = Ho[--Wo]), (Ho[Wo] = null), (Qo = Ho[--Wo]), (Ho[Wo] = null);
          for (; e === Yo; )
            (Yo = Ko[--Go]),
              (Ko[Go] = null),
              (Xo = Ko[--Go]),
              (Ko[Go] = null),
              (Jo = Ko[--Go]),
              (Ko[Go] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function sa(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Jo, overflow: Xo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && la(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) sa(e, t), (t = uo(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = w.ReactCurrentBatchConfig;
        function ya(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function va(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function wa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === j &&
                    ba(a) === t.type))
              ? (((r = o(t, n.props)).ref = ya(e, t, n)), (r.return = e), r)
              : (((r = Au(n.type, n.key, n.props, null, e.mode, r)).ref = ya(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = ya(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case j:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zu(t, e.mode, n, null)).return = e), t;
              va(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? u(e, t, n, r) : null;
                case x:
                  return n.key === o ? c(e, t, n, r) : null;
                case j:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : d(e, t, n, r, null);
              va(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case j:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              va(t, r);
            }
            return null;
          }
          function m(o, a, s, l) {
            for (
              var u = null, c = null, d = a, m = (a = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(o, d, s[m], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === s.length) return n(o, d), aa && Zo(o, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(o, s[m], l)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return aa && Zo(o, m), u;
            }
            for (d = r(o, d); m < s.length; m++)
              null !== (g = h(d, o, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          function g(o, s, l, u) {
            var c = z(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var d = (c = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (s = i(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(o, m), aa && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = f(o, v.value, u)) &&
                  ((s = i(v, s, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return aa && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = l.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = i(v, s, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              c
            );
          }
          return function e(r, a, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === j &&
                            ba(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = ya(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((a = zu(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = a))
                      : (((l = Au(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = ya(r, a, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case x:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Bu(i, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case j:
                  return e(r, a, (c = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, a, i, l);
              if (z(i)) return g(r, a, i, l);
              va(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Fu(i, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var ka = wa(!0),
          xa = wa(!1),
          Sa = _o(null),
          Ea = null,
          _a = null,
          Ca = null;
        function Na() {
          Ca = _a = Ea = null;
        }
        function Oa(e) {
          var t = Sa.current;
          Co(Sa), (e._currentValue = t);
        }
        function Ra(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ta(e, t) {
          (Ea = e),
            (Ca = _a = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Pa(e) {
          var t = e._currentValue;
          if (Ca !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === _a)
            ) {
              if (null === Ea) throw Error(a(308));
              (_a = e), (Ea.dependencies = { lanes: 0, firstContext: e });
            } else _a = _a.next = e;
          return t;
        }
        var ja = null;
        function La(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Aa(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), La(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            za(e, r)
          );
        }
        function za(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Da = !1;
        function Fa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ba(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ua(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ia(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ol))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              za(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), La(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            za(e, n)
          );
        }
        function Ma(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function qa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Va(e, t, n, r) {
          var o = e.updateQueue;
          Da = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === i ? (a = u) : (i.next = u), (i = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = l = null, s = a; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Da = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Dl |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Wa = {},
          $a = _o(Wa),
          Qa = _o(Wa),
          Ka = _o(Wa);
        function Ga(e) {
          if (e === Wa) throw Error(a(174));
          return e;
        }
        function Ya(e, t) {
          switch ((No(Ka, t), No(Qa, e), No($a, Wa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Co($a), No($a, t);
        }
        function Ja() {
          Co($a), Co(Qa), Co(Ka);
        }
        function Xa(e) {
          Ga(Ka.current);
          var t = Ga($a.current),
            n = le(t, e.type);
          t !== n && (No(Qa, e), No($a, n));
        }
        function Za(e) {
          Qa.current === e && (Co($a), Co(Qa));
        }
        var ei = _o(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var oi = w.ReactCurrentDispatcher,
          ai = w.ReactCurrentBatchConfig,
          ii = 0,
          si = null,
          li = null,
          ui = null,
          ci = !1,
          di = !1,
          fi = 0,
          pi = 0;
        function hi() {
          throw Error(a(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, o, i) {
          if (
            ((ii = i),
            (si = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (oi.current = null === e || null === e.memoizedState ? Zi : es),
            (e = n(r, o)),
            di)
          ) {
            i = 0;
            do {
              if (((di = !1), (fi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (ui = li = null),
                (t.updateQueue = null),
                (oi.current = ts),
                (e = n(r, o));
            } while (di);
          }
          if (
            ((oi.current = Xi),
            (t = null !== li && null !== li.next),
            (ii = 0),
            (ui = li = si = null),
            (ci = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function yi() {
          var e = 0 !== fi;
          return (fi = 0), e;
        }
        function vi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ui ? (si.memoizedState = ui = e) : (ui = ui.next = e), ui
          );
        }
        function bi() {
          if (null === li) {
            var e = si.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = li.next;
          var t = null === ui ? si.memoizedState : ui.next;
          if (null !== t) (ui = t), (li = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (li = e).memoizedState,
              baseState: li.baseState,
              baseQueue: li.baseQueue,
              queue: li.queue,
              next: null,
            }),
              null === ui ? (si.memoizedState = ui = e) : (ui = ui.next = e);
          }
          return ui;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = li,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((ii & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (si.lanes |= d),
                  (Dl |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (si.lanes |= i), (Dl |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function xi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            sr(i, t.memoizedState) || (bs = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Si() {}
        function Ei(e, t) {
          var n = si,
            r = bi(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (bs = !0)),
            (r = r.queue),
            Di(Ni.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ui && 1 & ui.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Pi(9, Ci.bind(null, n, r, o, t), void 0, null),
              null === Rl)
            )
              throw Error(a(349));
            0 !== (30 & ii) || _i(n, t, o);
          }
          return o;
        }
        function _i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ci(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oi(t) && Ri(e);
        }
        function Ni(e, t, n) {
          return n(function () {
            Oi(t) && Ri(e);
          });
        }
        function Oi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ri(e) {
          var t = za(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ti(e) {
          var t = vi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ki.bind(null, si, e)),
            [t.memoizedState, e]
          );
        }
        function Pi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ji() {
          return bi().memoizedState;
        }
        function Li(e, t, n, r) {
          var o = vi();
          (si.flags |= e),
            (o.memoizedState = Pi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ai(e, t, n, r) {
          var o = bi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== li) {
            var i = li.memoizedState;
            if (((a = i.destroy), null !== r && mi(r, i.deps)))
              return void (o.memoizedState = Pi(t, n, a, r));
          }
          (si.flags |= e), (o.memoizedState = Pi(1 | t, n, a, r));
        }
        function zi(e, t) {
          return Li(8390656, 8, e, t);
        }
        function Di(e, t) {
          return Ai(2048, 8, e, t);
        }
        function Fi(e, t) {
          return Ai(4, 2, e, t);
        }
        function Bi(e, t) {
          return Ai(4, 4, e, t);
        }
        function Ui(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ii(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ai(4, 4, Ui.bind(null, t, e), n)
          );
        }
        function Mi() {}
        function qi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Hi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (si.lanes |= n), (Dl |= n), (e.baseState = !0)),
              t);
        }
        function Wi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ai.transition = r);
          }
        }
        function $i() {
          return bi().memoizedState;
        }
        function Qi(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Gi(e))
          )
            Yi(t, n);
          else if (null !== (n = Aa(e, t, n, r))) {
            nu(n, e, r, eu()), Ji(n, t, r);
          }
        }
        function Ki(e, t, n) {
          var r = tu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Gi(e)) Yi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), La(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Aa(e, t, o, r)) &&
              (nu(n, e, r, (o = eu())), Ji(n, t, r));
          }
        }
        function Gi(e) {
          var t = e.alternate;
          return e === si || (null !== t && t === si);
        }
        function Yi(e, t) {
          di = ci = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ji(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var Xi = {
            readContext: Pa,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Pa,
            useCallback: function (e, t) {
              return (vi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Pa,
            useEffect: zi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Li(4194308, 4, Ui.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Li(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Li(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Qi.bind(null, si, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vi().memoizedState = e);
            },
            useState: Ti,
            useDebugValue: Mi,
            useDeferredValue: function (e) {
              return (vi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ti(!1),
                t = e[0];
              return (
                (e = Wi.bind(null, e[1])), (vi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = si,
                o = vi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(a(349));
                0 !== (30 & ii) || _i(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                zi(Ni.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Pi(9, Ci.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vi(),
                t = Rl.identifierPrefix;
              if (aa) {
                var n = Xo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Jo & ~(1 << (32 - it(Jo) - 1))).toString(32) + n)),
                  0 < (n = fi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Pa,
            useCallback: qi,
            useContext: Pa,
            useEffect: Di,
            useImperativeHandle: Ii,
            useInsertionEffect: Fi,
            useLayoutEffect: Bi,
            useMemo: Vi,
            useReducer: ki,
            useRef: ji,
            useState: function () {
              return ki(wi);
            },
            useDebugValue: Mi,
            useDeferredValue: function (e) {
              return Hi(bi(), li.memoizedState, e);
            },
            useTransition: function () {
              return [ki(wi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Pa,
            useCallback: qi,
            useContext: Pa,
            useEffect: Di,
            useImperativeHandle: Ii,
            useInsertionEffect: Fi,
            useLayoutEffect: Bi,
            useMemo: Vi,
            useReducer: xi,
            useRef: ji,
            useState: function () {
              return xi(wi);
            },
            useDebugValue: Mi,
            useDeferredValue: function (e) {
              var t = bi();
              return null === li
                ? (t.memoizedState = e)
                : Hi(t, li.memoizedState, e);
            },
            useTransition: function () {
              return [xi(wi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var os = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Ua(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, o)) && (nu(t, e, o, r), Ma(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              a = Ua(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, o)) && (nu(t, e, o, r), Ma(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              o = Ua(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Ia(e, o, r)) && (nu(t, e, r, n), Ma(t, e, r));
          },
        };
        function as(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, a);
        }
        function is(e, t, n) {
          var r = !1,
            o = Oo,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Pa(a))
              : ((o = Lo(t) ? Po : Ro.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? jo(e, o)
                  : Oo)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = os),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && os.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Fa(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Pa(a))
            : ((a = Lo(t) ? Po : Ro.current), (o.context = jo(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (rs(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && os.enqueueReplaceState(o, o.state, null),
              Va(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function cs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fs = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Ua(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hl || ((Hl = !0), (Wl = r)), ds(0, t);
            }),
            n
          );
        }
        function hs(e, t, n) {
          (n = Ua(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === $l ? ($l = new Set([this])) : $l.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = _u.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ua(-1, 1)).tag = 2), Ia(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var vs = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? xa(t, null, n, r) : ka(t, e.child, n, r);
        }
        function ks(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ta(t, o),
            (r = gi(e, t, n, r, a, o)),
            (n = yi()),
            null === e || bs
              ? (aa && n && ta(t), (t.flags |= 1), ws(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Hs(e, t, o))
          );
        }
        function xs(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              ju(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Au(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ss(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Hs(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Hs(e, t, o);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Cs(e, t, n, r, o);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                No(Ll, jl),
                (jl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  No(Ll, jl),
                  (jl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                No(Ll, jl),
                (jl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              No(Ll, jl),
              (jl |= r);
          return ws(e, t, o, n), t.child;
        }
        function _s(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cs(e, t, n, r, o) {
          var a = Lo(n) ? Po : Ro.current;
          return (
            (a = jo(t, a)),
            Ta(t, o),
            (n = gi(e, t, n, r, a, o)),
            (r = yi()),
            null === e || bs
              ? (aa && r && ta(t), (t.flags |= 1), ws(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Hs(e, t, o))
          );
        }
        function Ns(e, t, n, r, o) {
          if (Lo(n)) {
            var a = !0;
            Fo(t);
          } else a = !1;
          if ((Ta(t, o), null === t.stateNode))
            Vs(e, t), is(t, n, r), ls(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Pa(u))
              : (u = jo(t, (u = Lo(n) ? Po : Ro.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== u) && ss(t, i, r, u)),
              (Da = !1);
            var f = t.memoizedState;
            (i.state = f),
              Va(t, r, i, o),
              (l = t.memoizedState),
              s !== r || f !== l || To.current || Da
                ? ("function" === typeof c &&
                    (rs(t, n, c, r), (l = t.memoizedState)),
                  (s = Da || as(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ba(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ns(t.type, s)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Pa(l))
                : (l = jo(t, (l = Lo(n) ? Po : Ro.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== l) && ss(t, i, r, l)),
              (Da = !1),
              (f = t.memoizedState),
              (i.state = f),
              Va(t, r, i, o);
            var h = t.memoizedState;
            s !== d || f !== h || To.current || Da
              ? ("function" === typeof p &&
                  (rs(t, n, p, r), (h = t.memoizedState)),
                (u = Da || as(t, n, u, r, f, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, a, o);
        }
        function Os(e, t, n, r, o, a) {
          _s(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Bo(t, n, !1), Hs(e, t, a);
          (r = t.stateNode), (vs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = ka(t, e.child, null, a)),
                (t.child = ka(t, null, s, a)))
              : ws(e, t, s, a),
            (t.memoizedState = r.state),
            o && Bo(t, n, !0),
            t.child
          );
        }
        function Rs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            Ya(e, t.containerInfo);
        }
        function Ts(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Ps,
          js,
          Ls,
          As,
          zs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ds(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fs(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ei.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            No(ei, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Du(l, o, 0, null)),
                      (e = zu(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ds(n)),
                      (t.memoizedState = zs),
                      e)
                    : Bs(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Us(e, t, s, (r = cs(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = zu(i, o, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && ka(t, e.child, null, s),
                    (t.child.memoizedState = Ds(s)),
                    (t.memoizedState = zs),
                    i);
              if (0 === (1 & t.mode)) return Us(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Us(e, t, s, (r = cs((i = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = Rl)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), za(e, o), nu(r, e, o, -1));
                }
                return mu(), Us(e, t, s, (r = cs(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Go++] = Jo),
                    (Ko[Go++] = Xo),
                    (Ko[Go++] = Yo),
                    (Jo = e.id),
                    (Xo = e.overflow),
                    (Yo = t)),
                  (t = Bs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, i, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Lu(r, s))
                : ((s = zu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ds(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = zs),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Lu(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Bs(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Us(e, t, n, r) {
          return (
            null !== r && ma(r),
            ka(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Is(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ra(e.return, t, n);
        }
        function Ms(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function qs(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Is(e, n, t);
                else if (19 === e.tag) Is(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((No(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ms(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ti(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ms(t, !0, n, null, a);
                break;
              case "together":
                Ms(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Dl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ws(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $s(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $s(t), null;
            case 1:
            case 17:
              return Lo(t.type) && Ao(), $s(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Ja(),
                Co(To),
                Co(Ro),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (iu(ia), (ia = null)))),
                js(e, t),
                $s(t),
                null
              );
            case 5:
              Za(t);
              var o = Ga(Ka.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ls(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return $s(t), null;
                }
                if (((e = Ga($a.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < zr.length; o++) Ur(zr[o], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Ur("invalid", r);
                  }
                  for (var l in (ve(n, i), (o = null), i))
                    if (i.hasOwnProperty(l)) {
                      var u = i[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Ps(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < zr.length; o++) Ur(zr[o], e);
                        o = r;
                        break;
                      case "source":
                        Ur("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (o = r);
                        break;
                      case "details":
                        Ur("toggle", e), (o = r);
                        break;
                      case "input":
                        Y(e, r), (o = G(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = F({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $s(t), null;
            case 6:
              if (e && null != t.stateNode) As(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Ga(Ka.current)), Ga($a.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return $s(t), null;
            case 13:
              if (
                (Co(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $s(t), (i = !1);
                } else null !== ia && (iu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Al && (Al = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $s(t),
                  null);
            case 4:
              return (
                Ja(),
                js(e, t),
                null === e && qr(t.stateNode.containerInfo),
                $s(t),
                null
              );
            case 10:
              return Oa(t.type._context), $s(t), null;
            case 19:
              if ((Co(ei), null === (i = t.memoizedState))) return $s(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Ws(i, !1);
                else {
                  if (0 !== Al || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ti(e))) {
                        for (
                          t.flags |= 128,
                            Ws(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return No(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > ql &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ws(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ws(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !aa)
                    )
                      return $s(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > ql &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ws(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ei.current),
                  No(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($s(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & jl) &&
                    ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $s(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ks(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && Ao(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Ja(),
                Co(To),
                Co(Ro),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Za(t), null;
            case 13:
              if (
                (Co(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Co(ei), null;
            case 4:
              return Ja(), null;
            case 10:
              return Oa(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ps = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (js = function () {}),
          (Ls = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ga($a.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = G(e, o)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (o = F({}, o, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            i || l === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (As = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gs = !1,
          Ys = !1,
          Js = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && el(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[go],
              delete t[yo],
              delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function il(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || il(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Ys || Zs(n, t);
            case 6:
              var r = cl,
                o = dl;
              (cl = null),
                fl(e, t, n),
                (dl = o),
                null !== (cl = r) &&
                  (dl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (dl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    qt(e))
                  : lo(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (o = dl),
                (cl = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (cl = r),
                (dl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ys &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      el(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Ys &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ys = (r = Ys) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Ys = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Js()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(a(160));
                pl(i, s, o), (cl = null), (dl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), yl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              ml(t, e), yl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                yl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(o, i),
                      be(l, s);
                    var c = be(l, i);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, f)
                        : "children" === d
                        ? fe(o, f)
                        : b(o, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        X(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              ml(t, e), yl(e);
              break;
            case 13:
              ml(t, e),
                yl(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Ml = Je())),
                4 & r && hl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ys = (c = Ys) || d), ml(t, e), (Ys = c))
                  : ml(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((h = (p = Xs).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, p, p.return);
                          break;
                        case 1:
                          Zs(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zs(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            kl(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xs = h)) : kl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), yl(e), 4 & r && hl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (il(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    ul(e, sl(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ll(e, sl(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vl(e, t, n) {
          (Xs = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var o = Xs,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Gs;
              if (!i) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Ys;
                s = Gs;
                var u = Ys;
                if (((Gs = i), (Ys = l) && !u))
                  for (Xs = o; null !== Xs; )
                    (l = (i = Xs).child),
                      22 === i.tag && null !== i.memoizedState
                        ? xl(o)
                        : null !== l
                        ? ((l.return = i), (Xs = l))
                        : xl(o);
                for (; null !== a; ) (Xs = a), bl(a, t, n), (a = a.sibling);
                (Xs = o), (Gs = s), (Ys = u);
              }
              wl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Xs = a))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ys || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ys)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ha(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ha(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && qt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Ys || (512 & t.flags && ol(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function xl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, o, l);
                    }
                  }
                  var a = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Eu(t, a, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var Sl,
          El = Math.ceil,
          _l = w.ReactCurrentDispatcher,
          Cl = w.ReactCurrentOwner,
          Nl = w.ReactCurrentBatchConfig,
          Ol = 0,
          Rl = null,
          Tl = null,
          Pl = 0,
          jl = 0,
          Ll = _o(0),
          Al = 0,
          zl = null,
          Dl = 0,
          Fl = 0,
          Bl = 0,
          Ul = null,
          Il = null,
          Ml = 0,
          ql = 1 / 0,
          Vl = null,
          Hl = !1,
          Wl = null,
          $l = null,
          Ql = !1,
          Kl = null,
          Gl = 0,
          Yl = 0,
          Jl = null,
          Xl = -1,
          Zl = 0;
        function eu() {
          return 0 !== (6 & Ol) ? Je() : -1 !== Xl ? Xl : (Xl = Je());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ol) && 0 !== Pl
            ? Pl & -Pl
            : null !== ga.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Yl) throw ((Yl = 0), (Jl = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & Ol) && e === Rl) ||
              (e === Rl && (0 === (2 & Ol) && (Fl |= n), 4 === Al && su(e, Pl)),
              ru(e, r),
              1 === n &&
                0 === Ol &&
                0 === (1 & t.mode) &&
                ((ql = Je() + 500), Io && Vo()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                s = 1 << i,
                l = o[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[i] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Io = !0), qo(e);
                  })(lu.bind(null, e))
                : qo(lu.bind(null, e)),
                io(function () {
                  0 === (6 & Ol) && Vo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ru(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Xl = -1), (Zl = 0), 0 !== (6 & Ol))) throw Error(a(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Rl ? Pl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var o = Ol;
            Ol |= 2;
            var i = hu();
            for (
              (Rl === e && Pl === t) ||
              ((Vl = null), (ql = Je() + 500), fu(e, t));
              ;

            )
              try {
                vu();
                break;
              } catch (l) {
                pu(e, l);
              }
            Na(),
              (_l.current = i),
              (Ol = o),
              null !== Tl ? (t = 0) : ((Rl = null), (Pl = 0), (t = Al));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = au(e, o))),
              1 === t)
            )
              throw ((n = zl), fu(e, 0), su(e, r), ru(e, Je()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = au(e, i))),
                  1 === t))
              )
                throw ((n = zl), fu(e, 0), su(e, r), ru(e, Je()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ku(e, Il, Vl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ml + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ku.bind(null, e, Il, Vl), t);
                    break;
                  }
                  ku(e, Il, Vl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ku.bind(null, e, Il, Vl), r);
                    break;
                  }
                  ku(e, Il, Vl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Je()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Ul;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Il), (Il = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Il ? (Il = e) : Il.push.apply(Il, e);
        }
        function su(e, t) {
          for (
            t &= ~Bl,
              t &= ~Fl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (0 !== (6 & Ol)) throw Error(a(327));
          xu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Je()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = zl), fu(e, 0), su(e, t), ru(e, Je()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Il, Vl),
            ru(e, Je()),
            null
          );
        }
        function uu(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && ((ql = Je() + 500), Io && Vo());
          }
        }
        function cu(e) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & Ol) && xu();
          var t = Ol;
          Ol |= 1;
          var n = Nl.transition,
            r = bt;
          try {
            if (((Nl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nl.transition = n), 0 === (6 & (Ol = t)) && Vo();
          }
        }
        function du() {
          (jl = Ll.current), Co(Ll);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ao();
                  break;
                case 3:
                  Ja(), Co(To), Co(Ro), ri();
                  break;
                case 5:
                  Za(r);
                  break;
                case 4:
                  Ja();
                  break;
                case 13:
                case 19:
                  Co(ei);
                  break;
                case 10:
                  Oa(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Tl = e = Lu(e.current, null)),
            (Pl = jl = t),
            (Al = 0),
            (zl = null),
            (Bl = Fl = Dl = 0),
            (Il = Ul = null),
            null !== ja)
          ) {
            for (t = 0; t < ja.length; t++)
              if (null !== (r = (n = ja[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            ja = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((Na(), (oi.current = Xi), ci)) {
                for (var r = si.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ci = !1;
              }
              if (
                ((ii = 0),
                (ui = li = si = null),
                (di = !1),
                (fi = 0),
                (Cl.current = null),
                null === n || null === n.return)
              ) {
                (Al = 1), (zl = t), (Tl = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Pl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ys(h, s, l, 0, t),
                      1 & h.mode && ms(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(i, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & l.mode) {
                  var y = gs(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      ys(y, s, l, 0, t),
                      ma(us(u, l));
                    break e;
                  }
                }
                (i = u = us(u, l)),
                  4 !== Al && (Al = 2),
                  null === Ul ? (Ul = [i]) : Ul.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        qa(i, ps(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $l || !$l.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          qa(i, hs(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (w) {
              (t = w), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = _l.current;
          return (_l.current = Xi), null === e ? Xi : e;
        }
        function mu() {
          (0 !== Al && 3 !== Al && 2 !== Al) || (Al = 4),
            null === Rl ||
              (0 === (268435455 & Dl) && 0 === (268435455 & Fl)) ||
              su(Rl, Pl);
        }
        function gu(e, t) {
          var n = Ol;
          Ol |= 2;
          var r = hu();
          for ((Rl === e && Pl === t) || ((Vl = null), fu(e, t)); ; )
            try {
              yu();
              break;
            } catch (o) {
              pu(e, o);
            }
          if ((Na(), (Ol = n), (_l.current = r), null !== Tl))
            throw Error(a(261));
          return (Rl = null), (Pl = 0), Al;
        }
        function yu() {
          for (; null !== Tl; ) bu(Tl);
        }
        function vu() {
          for (; null !== Tl && !Ge(); ) bu(Tl);
        }
        function bu(e) {
          var t = Sl(e.alternate, e, jl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Tl = t),
            (Cl.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, jl))) return void (Tl = n);
            } else {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (Al = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === Al && (Al = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            o = Nl.transition;
          try {
            (Nl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Kl);
                if (0 !== (6 & Ol)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Rl && ((Tl = Rl = null), (Pl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Ru(tt, function () {
                      return xu(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Nl.transition), (Nl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Ol;
                  (Ol |= 4),
                    (Cl.current = null),
                    (function (e, t) {
                      if (((eo = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (l = s),
                                    p === i && ++d === r && (u = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ns(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              Eu(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    hr(to),
                    (Ht = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    vl(n, e, o),
                    Ye(),
                    (Ol = l),
                    (bt = s),
                    (Nl.transition = i);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Kl = e), (Gl = o)),
                  (i = e.pendingLanes),
                  0 === i && ($l = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Hl) throw ((Hl = !1), (e = Wl), (Wl = null), e);
                0 !== (1 & Gl) && 0 !== e.tag && xu(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Jl
                      ? Yl++
                      : ((Yl = 0), (Jl = e))
                    : (Yl = 0),
                  Vo();
              })(e, t, n, r);
          } finally {
            (Nl.transition = o), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Kl) {
            var e = wt(Gl),
              t = Nl.transition,
              n = bt;
            try {
              if (((Nl.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var r = !1;
              else {
                if (((e = Kl), (Kl = null), (Gl = 0), 0 !== (6 & Ol)))
                  throw Error(a(331));
                var o = Ol;
                for (Ol |= 4, Xs = e.current; null !== Xs; ) {
                  var i = Xs,
                    s = i.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Xs = f);
                          else
                            for (; null !== Xs; ) {
                              var p = (d = Xs).sibling,
                                h = d.return;
                              if ((al(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xs = p);
                                break;
                              }
                              Xs = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Xs = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (i = Xs).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Xs = v);
                        break e;
                      }
                      Xs = i.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Xs = w);
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (x) {
                          Eu(l, l.return, x);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Xs = k);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((Ol = o),
                  Vo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nl.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Ia(e, (t = ps(0, (t = us(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (yt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  (t = Ia(t, (e = hs(t, (e = us(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (yt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _u(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Pl & n) === n &&
              (4 === Al ||
              (3 === Al && (130023424 & Pl) === Pl && 500 > Je() - Ml)
                ? fu(e, 0)
                : (Bl |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = za(e, t)) && (yt(e, t, n), ru(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Ru(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pu(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function ju(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Au(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) ju(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return zu(n.children, o, i, t);
              case E:
                (s = 8), (o |= 8);
                break;
              case _:
                return (
                  ((e = Pu(12, n, t, 2 | o)).elementType = _), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Pu(13, n, t, o)).elementType = R), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Pu(19, n, t, o)).elementType = T), (e.lanes = i), e
                );
              case L:
                return Du(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      s = 10;
                      break e;
                    case N:
                      s = 9;
                      break e;
                    case O:
                      s = 11;
                      break e;
                    case P:
                      s = 14;
                      break e;
                    case j:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zu(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Pu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Iu(e, t, n, r, o, a, i, s, l) {
          return (
            (e = new Uu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Pu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Fa(a),
            e
          );
        }
        function Mu(e) {
          if (!e) return Oo;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lo(n)) return Do(e, n, t);
          }
          return t;
        }
        function qu(e, t, n, r, o, a, i, s, l) {
          return (
            ((e = Iu(n, r, !0, e, 0, a, 0, s, l)).context = Mu(null)),
            (n = e.current),
            ((a = Ua((r = eu()), (o = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ia(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var o = t.current,
            a = eu(),
            i = tu(o);
          return (
            (n = Mu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ua(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ia(o, t, i)) && (nu(e, o, i, a), Ma(e, o, i)),
            i
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || To.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rs(t), ha();
                        break;
                      case 5:
                        Xa(t);
                        break;
                      case 1:
                        Lo(t.type) && Fo(t);
                        break;
                      case 4:
                        Ya(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        No(Sa, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (No(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fs(e, t, n)
                            : (No(ei, 1 & ei.current),
                              null !== (e = Hs(e, t, n)) ? e.sibling : null);
                        No(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return qs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          No(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Hs(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var o = jo(t, Ro.current);
              Ta(t, n), (o = gi(null, t, r, e, o, n));
              var i = yi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((i = !0), Fo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Fa(t),
                    (o.updater = os),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    ls(t, r, e, n),
                    (t = Os(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    ws(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return ju(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  o)
                ) {
                  case 0:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xs(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cs(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ns(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 3:
              e: {
                if ((Rs(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Ba(e, t),
                  Va(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, r, n, (o = us(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ts(e, t, r, n, (o = us(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = xa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Hs(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xa(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                _s(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Fs(e, t, n);
            case 4:
              return (
                Ya(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ka(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = o.value),
                  No(Sa, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === o.children && !To.current) {
                      t = Hs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ua(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ra(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ra(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                ws(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ta(t, n),
                (r = r((o = Pa(o)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = ns((r = t.type), t.pendingProps)),
                xs(e, t, r, (o = ns(r.type, o)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ns(r, o)),
                Vs(e, t),
                (t.tag = 1),
                Lo(r) ? ((e = !0), Fo(t)) : (e = !1),
                Ta(t, n),
                is(t, r, o),
                ls(t, r, o, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return qs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function Zu(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Hu(i);
                s.call(e);
              };
            }
            Vu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Hu(i);
                    a.call(e);
                  };
                }
                var i = qu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Hu(l);
                  s.call(e);
                };
              }
              var l = Iu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Hu(i);
        }
        (Gu.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Gu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Gu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ru(t, Je()),
                    0 === (6 & Ol) && ((ql = Je() + 500), Vo()));
                }
                break;
              case 13:
                cu(function () {
                  var t = za(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = za(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = za(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = xo(r);
                      if (!o) throw Error(a(90));
                      Q(r), X(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = uu),
          (Re = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [wo, ko, xo, Ce, Ne, uu],
          },
          tc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (ot = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Yu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Yu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Iu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Yu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              s = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = qu(t, null, e, 1, null != n ? n : null, o, 0, i, s)),
              (e[mo] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Gu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === a[o] && (a[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function O(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === a ? "." + O(l, 0) : a),
              k(i)
                ? ((o = ""),
                  null != e && (o = e.replace(N, "$&/") + "/"),
                  R(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + O((s = e[u]), u);
              l += R(s, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += R((s = s.value), t, o, (c = a + O(s, u++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var j = { current: null },
          L = { transition: null },
          A = {
            ReactCurrentDispatcher: j,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        function z() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.act = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = z),
          (t.useCallback = function (e, t) {
            return j.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return j.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return j.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return j.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return j.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return j.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j.current.useRef(e);
          }),
          (t.useState = function (e) {
            return j.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return j.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return j.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < o && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(x);
            else {
              var t = r(c);
              null !== t && A(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !R()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && A(k, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          _ = null,
          C = -1,
          N = 5,
          O = -1;
        function R() {
          return !(t.unstable_now() - O < N);
        }
        function T() {
          if (null !== _) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? S() : ((E = !1), (_ = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            j = P.port2;
          (P.port1.onmessage = T),
            (S = function () {
              j.postMessage(null);
            });
        } else
          S = function () {
            y(T, 0);
          };
        function L(e) {
          (_ = e), E || ((E = !0), S());
        }
        function A(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), A(k, a - i)))
                : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), L(x))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, o) {
      if ((1 & o && (r = this(r)), 8 & o)) return r;
      if ("object" === typeof r && r) {
        if (4 & o && r.__esModule) return r;
        if (16 & o && "function" === typeof r.then) return r;
      }
      var a = Object.create(null);
      n.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & o && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(a, i), a;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => Dt,
      hasStandardBrowserEnv: () => Bt,
      hasStandardBrowserWebWorkerEnv: () => Ut,
      navigator: () => Ft,
      origin: () => It,
    });
  var o = {};
  n.r(o),
    n.d(o, {
      Decoder: () => vo,
      Encoder: () => go,
      PacketType: () => mo,
      protocol: () => ho,
    });
  var a,
    i = n(43),
    s = n.t(i, 2),
    l = n(391);
  function u() {
    return (
      (u = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      u.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(a || (a = {}));
  const c = "popstate";
  function d(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function f(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function p(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function h(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      u(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? g(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function m(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function g(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function y(e, t, n, r) {
    void 0 === r && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
      s = o.history,
      l = a.Pop,
      f = null,
      g = y();
    function y() {
      return (s.state || { idx: null }).idx;
    }
    function v() {
      l = a.Pop;
      let e = y(),
        t = null == e ? null : e - g;
      (g = e), f && f({ action: l, location: w.location, delta: t });
    }
    function b(e) {
      let t =
          "null" !== o.location.origin ? o.location.origin : o.location.href,
        n = "string" === typeof e ? e : m(e);
      return (
        (n = n.replace(/ $/, "%20")),
        d(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == g && ((g = 0), s.replaceState(u({}, s.state, { idx: g }), ""));
    let w = {
      get action() {
        return l;
      },
      get location() {
        return e(o, s);
      },
      listen(e) {
        if (f) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(c, v),
          (f = e),
          () => {
            o.removeEventListener(c, v), (f = null);
          }
        );
      },
      createHref: (e) => t(o, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        l = a.Push;
        let r = h(w.location, e, t);
        n && n(r, e), (g = y() + 1);
        let u = p(r, g),
          c = w.createHref(r);
        try {
          s.pushState(u, "", c);
        } catch (d) {
          if (d instanceof DOMException && "DataCloneError" === d.name) throw d;
          o.location.assign(c);
        }
        i && f && f({ action: l, location: w.location, delta: 1 });
      },
      replace: function (e, t) {
        l = a.Replace;
        let r = h(w.location, e, t);
        n && n(r, e), (g = y());
        let o = p(r, g),
          u = w.createHref(r);
        s.replaceState(o, "", u),
          i && f && f({ action: l, location: w.location, delta: 0 });
      },
      go: (e) => s.go(e),
    };
    return w;
  }
  var v;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(v || (v = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function b(e, t, n) {
    return void 0 === n && (n = "/"), w(e, t, n, !1);
  }
  function w(e, t, n, r) {
    let o = A(("string" === typeof t ? g(t) : t).pathname || "/", n);
    if (null == o) return null;
    let a = k(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(a);
    let i = null;
    for (let s = 0; null == i && s < a.length; ++s) {
      let e = L(o);
      i = P(a[s], e, r);
    }
    return i;
  }
  function k(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let o = (e, o, a) => {
      let i = {
        relativePath: void 0 === a ? e.path || "" : a,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: o,
        route: e,
      };
      i.relativePath.startsWith("/") &&
        (d(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let s = U([r, i.relativePath]),
        l = n.concat(i);
      e.children &&
        e.children.length > 0 &&
        (d(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            s +
            '".'
        ),
        k(e.children, t, l, s)),
        (null != e.path || e.index) &&
          t.push({ path: s, score: T(s, e.index), routesMeta: l });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of x(e.path)) o(e, t, r);
        else o(e, t);
      }),
      t
    );
  }
  function x(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      a = n.replace(/\?$/, "");
    if (0 === r.length) return o ? [a, ""] : [a];
    let i = x(r.join("/")),
      s = [];
    return (
      s.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))),
      o && s.push(...i),
      s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const S = /^:[\w-]+$/,
    E = 3,
    _ = 2,
    C = 1,
    N = 10,
    O = -2,
    R = (e) => "*" === e;
  function T(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(R) && (r += O),
      t && (r += _),
      n
        .filter((e) => !R(e))
        .reduce((e, t) => e + (S.test(t) ? E : "" === t ? C : N), r)
    );
  }
  function P(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      o = {},
      a = "/",
      i = [];
    for (let s = 0; s < r.length; ++s) {
      let e = r[s],
        l = s === r.length - 1,
        u = "/" === a ? t : t.slice(a.length) || "/",
        c = j(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          u
        ),
        d = e.route;
      if (
        (!c &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (c = j(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(o, c.params),
        i.push({
          params: o,
          pathname: U([a, c.pathname]),
          pathnameBase: I(U([a, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (a = U([a, c.pathnameBase]));
    }
    return i;
  }
  function j(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        f(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          o =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (o += "\\/*$")
          : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
        let a = new RegExp(o, t ? void 0 : "i");
        return [a, r];
      })(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let a = o[0],
      i = a.replace(/(.)\/+$/, "$1"),
      s = o.slice(1),
      l = r.reduce((e, t, n) => {
        let { paramName: r, isOptional: o } = t;
        if ("*" === r) {
          let e = s[n] || "";
          i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return (e[r] = o && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e;
      }, {});
    return { params: l, pathname: a, pathnameBase: i, pattern: e };
  }
  function L(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        f(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function A(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function z(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function D(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function F(e, t) {
    let n = D(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function B(e, t, n, r) {
    let o;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (o = g(e))
        : ((o = u({}, e)),
          d(
            !o.pathname || !o.pathname.includes("?"),
            z("?", "pathname", "search", o)
          ),
          d(
            !o.pathname || !o.pathname.includes("#"),
            z("#", "pathname", "hash", o)
          ),
          d(!o.search || !o.search.includes("#"), z("#", "search", "hash", o)));
    let a,
      i = "" === e || "" === o.pathname,
      s = i ? "/" : o.pathname;
    if (null == s) a = n;
    else {
      let e = t.length - 1;
      if (!r && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        o.pathname = t.join("/");
      }
      a = e >= 0 ? t[e] : "/";
    }
    let l = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: o = "",
          } = "string" === typeof e ? g(e) : e,
          a = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: a, search: M(r), hash: q(o) };
      })(o, a),
      c = s && "/" !== s && s.endsWith("/"),
      f = (i || "." === s) && n.endsWith("/");
    return l.pathname.endsWith("/") || (!c && !f) || (l.pathname += "/"), l;
  }
  const U = (e) => e.join("/").replace(/\/\/+/g, "/"),
    I = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    M = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    q = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function V(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const H = ["post", "put", "patch", "delete"],
    W = (new Set(H), ["get", ...H]);
  new Set(W), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function $() {
    return (
      ($ = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      $.apply(this, arguments)
    );
  }
  const Q = i.createContext(null);
  const K = i.createContext(null);
  const G = i.createContext(null);
  const Y = i.createContext(null);
  const J = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const X = i.createContext(null);
  function Z() {
    return null != i.useContext(Y);
  }
  function ee() {
    return Z() || d(!1), i.useContext(Y).location;
  }
  function te(e) {
    i.useContext(G).static || i.useLayoutEffect(e);
  }
  function ne() {
    let { isDataRoute: e } = i.useContext(J);
    return e
      ? (function () {
          let { router: e } = de(ue.UseNavigateStable),
            t = pe(ce.UseNavigateStable),
            n = i.useRef(!1);
          return (
            te(() => {
              n.current = !0;
            }),
            i.useCallback(
              function (r, o) {
                void 0 === o && (o = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, $({ fromRouteId: t }, o)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          Z() || d(!1);
          let e = i.useContext(Q),
            { basename: t, future: n, navigator: r } = i.useContext(G),
            { matches: o } = i.useContext(J),
            { pathname: a } = ee(),
            s = JSON.stringify(F(o, n.v7_relativeSplatPath)),
            l = i.useRef(!1);
          return (
            te(() => {
              l.current = !0;
            }),
            i.useCallback(
              function (n, o) {
                if ((void 0 === o && (o = {}), !l.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let i = B(n, JSON.parse(s), a, "path" === o.relative);
                null == e &&
                  "/" !== t &&
                  (i.pathname = "/" === i.pathname ? t : U([t, i.pathname])),
                  (o.replace ? r.replace : r.push)(i, o.state, o);
              },
              [t, r, s, a, e]
            )
          );
        })();
  }
  function re(e, t, n, r) {
    Z() || d(!1);
    let { navigator: o } = i.useContext(G),
      { matches: s } = i.useContext(J),
      l = s[s.length - 1],
      u = l ? l.params : {},
      c = (l && l.pathname, l ? l.pathnameBase : "/");
    l && l.route;
    let f,
      p = ee();
    if (t) {
      var h;
      let e = "string" === typeof t ? g(t) : t;
      "/" === c ||
        (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
        d(!1),
        (f = e);
    } else f = p;
    let m = f.pathname || "/",
      y = m;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      y = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let v = b(e, { pathname: y });
    let w = le(
      v &&
        v.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: U([
              c,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : U([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
    return t && w
      ? i.createElement(
          Y.Provider,
          {
            value: {
              location: $(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                f
              ),
              navigationType: a.Pop,
            },
          },
          w
        )
      : w;
  }
  function oe() {
    let e = (function () {
        var e;
        let t = i.useContext(X),
          n = fe(ce.UseRouteError),
          r = pe(ce.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = V(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: r };
    return i.createElement(
      i.Fragment,
      null,
      i.createElement("h2", null, "Unexpected Application Error!"),
      i.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? i.createElement("pre", { style: o }, n) : null,
      null
    );
  }
  const ae = i.createElement(oe, null);
  class ie extends i.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? i.createElement(
            J.Provider,
            { value: this.props.routeContext },
            i.createElement(X.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function se(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = i.useContext(Q);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      i.createElement(J.Provider, { value: t }, r)
    );
  }
  function le(e, t, n, r) {
    var o;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var a;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (a = r) &&
            a.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let s = e,
      l = null == (o = n) ? void 0 : o.errors;
    if (null != l) {
      let e = s.findIndex(
        (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
      );
      e >= 0 || d(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
    }
    let u = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let i = 0; i < s.length; i++) {
        let e = s[i];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (c = i),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            o =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || o) {
            (u = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]]);
            break;
          }
        }
      }
    return s.reduceRight((e, r, o) => {
      let a,
        d = !1,
        f = null,
        p = null;
      var h;
      n &&
        ((a = l && r.route.id ? l[r.route.id] : void 0),
        (f = r.route.errorElement || ae),
        u &&
          (c < 0 && 0 === o
            ? ((h = "route-fallback"),
              !1 || he[h] || (he[h] = !0),
              (d = !0),
              (p = null))
            : c === o &&
              ((d = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(s.slice(0, o + 1)),
        g = () => {
          let t;
          return (
            (t = a
              ? f
              : d
              ? p
              : r.route.Component
              ? i.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            i.createElement(se, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
        ? i.createElement(ie, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: a,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var ue = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(ue || {}),
    ce = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(ce || {});
  function de(e) {
    let t = i.useContext(Q);
    return t || d(!1), t;
  }
  function fe(e) {
    let t = i.useContext(K);
    return t || d(!1), t;
  }
  function pe(e) {
    let t = (function () {
        let e = i.useContext(J);
        return e || d(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || d(!1), n.route.id;
  }
  const he = {};
  s.startTransition;
  function me(e) {
    let { to: t, replace: n, state: r, relative: o } = e;
    Z() || d(!1);
    let { future: a, static: s } = i.useContext(G),
      { matches: l } = i.useContext(J),
      { pathname: u } = ee(),
      c = ne(),
      f = B(t, F(l, a.v7_relativeSplatPath), u, "path" === o),
      p = JSON.stringify(f);
    return (
      i.useEffect(
        () => c(JSON.parse(p), { replace: n, state: r, relative: o }),
        [c, p, o, n, r]
      ),
      null
    );
  }
  function ge(e) {
    d(!1);
  }
  function ye(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = a.Pop,
      navigator: s,
      static: l = !1,
      future: u,
    } = e;
    Z() && d(!1);
    let c = t.replace(/^\/*/, "/"),
      f = i.useMemo(
        () => ({
          basename: c,
          navigator: s,
          static: l,
          future: $({ v7_relativeSplatPath: !1 }, u),
        }),
        [c, u, s, l]
      );
    "string" === typeof r && (r = g(r));
    let {
        pathname: p = "/",
        search: h = "",
        hash: m = "",
        state: y = null,
        key: v = "default",
      } = r,
      b = i.useMemo(() => {
        let e = A(p, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: h, hash: m, state: y, key: v },
              navigationType: o,
            };
      }, [c, p, h, m, y, v, o]);
    return null == b
      ? null
      : i.createElement(
          G.Provider,
          { value: f },
          i.createElement(Y.Provider, { children: n, value: b })
        );
  }
  function ve(e) {
    let { children: t, location: n } = e;
    return re(be(t), n);
  }
  new Promise(() => {});
  i.Component;
  function be(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      i.Children.forEach(e, (e, r) => {
        if (!i.isValidElement(e)) return;
        let o = [...t, r];
        if (e.type === i.Fragment)
          return void n.push.apply(n, be(e.props.children, o));
        e.type !== ge && d(!1), e.props.index && e.props.children && d(!1);
        let a = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (a.children = be(e.props.children, o)), n.push(a);
      }),
      n
    );
  }
  var we = n(950),
    ke = n.t(we, 2);
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  try {
    window.__reactRouterVersion = "6";
  } catch (Jo) {}
  new Map();
  const xe = s.startTransition;
  ke.flushSync, s.useId;
  function Se(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      a = i.useRef();
    var s;
    null == a.current &&
      (a.current =
        (void 0 === (s = { window: o, v5Compat: !0 }) && (s = {}),
        y(
          function (e, t) {
            let { pathname: n, search: r, hash: o } = e.location;
            return h(
              "",
              { pathname: n, search: r, hash: o },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : m(t);
          },
          null,
          s
        )));
    let l = a.current,
      [u, c] = i.useState({ action: l.action, location: l.location }),
      { v7_startTransition: d } = r || {},
      f = i.useCallback(
        (e) => {
          d && xe ? xe(() => c(e)) : c(e);
        },
        [c, d]
      );
    return (
      i.useLayoutEffect(() => l.listen(f), [l, f]),
      i.createElement(ye, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: l,
        future: r,
      })
    );
  }
  "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    window.document.createElement;
  var Ee, _e;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Ee || (Ee = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(_e || (_e = {}));
  var Ce = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0,
  };
  function Ne(e) {
    var t = (function (e) {
      if ("number" === typeof e) return { value: e, unit: "px" };
      var t,
        n = (e.match(/^[0-9.]*/) || "").toString();
      t = n.includes(".") ? parseFloat(n) : parseInt(n, 10);
      var r = (e.match(/[^0-9]*$/) || "").toString();
      return Ce[r]
        ? { value: t, unit: r }
        : (console.warn(
            "React Spinners: "
              .concat(e, " is not a valid css value. Defaulting to ")
              .concat(t, "px.")
          ),
          { value: t, unit: "px" });
    })(e);
    return "".concat(t.value).concat(t.unit);
  }
  var Oe = function () {
      return (
        (Oe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        Oe.apply(this, arguments)
      );
    },
    Re = function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    },
    Te = (function (e, t, n) {
      var r = "react-spinners-".concat(e, "-").concat(n);
      if ("undefined" == typeof window || !window.document) return r;
      var o = document.createElement("style");
      document.head.appendChild(o);
      var a = o.sheet,
        i = "\n    @keyframes "
          .concat(r, " {\n      ")
          .concat(t, "\n    }\n  ");
      return a && a.insertRule(i, 0), r;
    })(
      "ScaleLoader",
      "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}",
      "scale"
    );
  const Pe = function (e) {
    var t = e.loading,
      n = void 0 === t || t,
      r = e.color,
      o = void 0 === r ? "#000000" : r,
      a = e.speedMultiplier,
      s = void 0 === a ? 1 : a,
      l = e.cssOverride,
      u = void 0 === l ? {} : l,
      c = e.height,
      d = void 0 === c ? 35 : c,
      f = e.width,
      p = void 0 === f ? 4 : f,
      h = e.radius,
      m = void 0 === h ? 2 : h,
      g = e.margin,
      y = void 0 === g ? 2 : g,
      v = Re(e, [
        "loading",
        "color",
        "speedMultiplier",
        "cssOverride",
        "height",
        "width",
        "radius",
        "margin",
      ]),
      b = Oe({ display: "inherit" }, u),
      w = function (e) {
        return {
          backgroundColor: o,
          width: Ne(p),
          height: Ne(d),
          margin: Ne(y),
          borderRadius: Ne(m),
          display: "inline-block",
          animation: ""
            .concat(Te, " ")
            .concat(1 / s, "s ")
            .concat(0.1 * e, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
          animationFillMode: "both",
        };
      };
    return n
      ? i.createElement(
          "span",
          Oe({ style: b }, v),
          i.createElement("span", { style: w(1) }),
          i.createElement("span", { style: w(2) }),
          i.createElement("span", { style: w(3) }),
          i.createElement("span", { style: w(4) }),
          i.createElement("span", { style: w(5) })
        )
      : null;
  };
  function je(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: Le } = Object.prototype,
    { getPrototypeOf: Ae } = Object,
    ze = ((e) => (t) => {
      const n = Le.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    De = (e) => ((e = e.toLowerCase()), (t) => ze(t) === e),
    Fe = (e) => (t) => typeof t === e,
    { isArray: Be } = Array,
    Ue = Fe("undefined");
  const Ie = De("ArrayBuffer");
  const Me = Fe("string"),
    qe = Fe("function"),
    Ve = Fe("number"),
    He = (e) => null !== e && "object" === typeof e,
    We = (e) => {
      if ("object" !== ze(e)) return !1;
      const t = Ae(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    $e = De("Date"),
    Qe = De("File"),
    Ke = De("Blob"),
    Ge = De("FileList"),
    Ye = De("URLSearchParams"),
    [Je, Xe, Ze, et] = ["ReadableStream", "Request", "Response", "Headers"].map(
      De
    );
  function tt(e, t) {
    let n,
      r,
      { allOwnKeys: o = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), Be(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = r.length;
        let i;
        for (n = 0; n < a; n++) (i = r[n]), t.call(null, e[i], i, e);
      }
  }
  function nt(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const rt =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : global,
    ot = (e) => !Ue(e) && e !== rt;
  const at =
    ((it = "undefined" !== typeof Uint8Array && Ae(Uint8Array)),
    (e) => it && e instanceof it);
  var it;
  const st = De("HTMLFormElement"),
    lt = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    ut = De("RegExp"),
    ct = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      tt(n, (n, o) => {
        let a;
        !1 !== (a = t(n, o, e)) && (r[o] = a || n);
      }),
        Object.defineProperties(e, r);
    },
    dt = "abcdefghijklmnopqrstuvwxyz",
    ft = "0123456789",
    pt = { DIGIT: ft, ALPHA: dt, ALPHA_DIGIT: dt + dt.toUpperCase() + ft };
  const ht = De("AsyncFunction"),
    mt = ((e, t) => {
      return e
        ? setImmediate
        : t
        ? ((n = `axios@${Math.random()}`),
          (r = []),
          rt.addEventListener(
            "message",
            (e) => {
              let { source: t, data: o } = e;
              t === rt && o === n && r.length && r.shift()();
            },
            !1
          ),
          (e) => {
            r.push(e), rt.postMessage(n, "*");
          })
        : (e) => setTimeout(e);
      var n, r;
    })("function" === typeof setImmediate, qe(rt.postMessage)),
    gt =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(rt)
        : ("undefined" !== typeof process && process.nextTick) || mt,
    yt = {
      isArray: Be,
      isArrayBuffer: Ie,
      isBuffer: function (e) {
        return (
          null !== e &&
          !Ue(e) &&
          null !== e.constructor &&
          !Ue(e.constructor) &&
          qe(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (qe(e.append) &&
              ("formdata" === (t = ze(e)) ||
                ("object" === t &&
                  qe(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Ie(e.buffer)),
          t
        );
      },
      isString: Me,
      isNumber: Ve,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: He,
      isPlainObject: We,
      isReadableStream: Je,
      isRequest: Xe,
      isResponse: Ze,
      isHeaders: et,
      isUndefined: Ue,
      isDate: $e,
      isFile: Qe,
      isBlob: Ke,
      isRegExp: ut,
      isFunction: qe,
      isStream: (e) => He(e) && qe(e.pipe),
      isURLSearchParams: Ye,
      isTypedArray: at,
      isFileList: Ge,
      forEach: tt,
      merge: function e() {
        const { caseless: t } = (ot(this) && this) || {},
          n = {},
          r = (r, o) => {
            const a = (t && nt(n, o)) || o;
            We(n[a]) && We(r)
              ? (n[a] = e(n[a], r))
              : We(r)
              ? (n[a] = e({}, r))
              : Be(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let o = 0, a = arguments.length; o < a; o++)
          arguments[o] && tt(arguments[o], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          tt(
            t,
            (t, r) => {
              n && qe(t) ? (e[r] = je(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let o, a, i;
        const s = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
            (i = o[a]),
              (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
          e = !1 !== n && Ae(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: ze,
      kindOfTest: De,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (Be(e)) return e;
        let t = e.length;
        if (!Ve(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: st,
      hasOwnProperty: lt,
      hasOwnProp: lt,
      reduceDescriptors: ct,
      freezeMethods: (e) => {
        ct(e, (t, n) => {
          if (qe(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          qe(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return Be(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: nt,
      global: rt,
      isContextDefined: ot,
      ALPHABET: pt,
      generateString: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : pt.ALPHA_DIGIT,
          n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          qe(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (He(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const o = Be(e) ? [] : {};
                return (
                  tt(e, (e, t) => {
                    const a = n(e, r + 1);
                    !Ue(a) && (o[t] = a);
                  }),
                  (t[r] = void 0),
                  o
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: ht,
      isThenable: (e) => e && (He(e) || qe(e)) && qe(e.then) && qe(e.catch),
      setImmediate: mt,
      asap: gt,
    };
  function vt(e, t, n, r, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && ((this.response = o), (this.status = o.status ? o.status : null));
  }
  yt.inherits(vt, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: yt.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const bt = vt.prototype,
    wt = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    wt[e] = { value: e };
  }),
    Object.defineProperties(vt, wt),
    Object.defineProperty(bt, "isAxiosError", { value: !0 }),
    (vt.from = (e, t, n, r, o, a) => {
      const i = Object.create(bt);
      return (
        yt.toFlatObject(
          e,
          i,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        vt.call(i, e.message, t, n, r, o),
        (i.cause = e),
        (i.name = e.name),
        a && Object.assign(i, a),
        i
      );
    });
  const kt = vt;
  function xt(e) {
    return yt.isPlainObject(e) || yt.isArray(e);
  }
  function St(e) {
    return yt.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Et(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = St(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const _t = yt.toFlatObject(yt, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const Ct = function (e, t, n) {
    if (!yt.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = yt.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !yt.isUndefined(t[e]);
        }
      )).metaTokens,
      o = n.visitor || u,
      a = n.dots,
      i = n.indexes,
      s =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        yt.isSpecCompliantForm(t);
    if (!yt.isFunction(o)) throw new TypeError("visitor must be a function");
    function l(e) {
      if (null === e) return "";
      if (yt.isDate(e)) return e.toISOString();
      if (!s && yt.isBlob(e))
        throw new kt("Blob is not supported. Use a Buffer instead.");
      return yt.isArrayBuffer(e) || yt.isTypedArray(e)
        ? s && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, o) {
      let s = e;
      if (e && !o && "object" === typeof e)
        if (yt.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (yt.isArray(e) &&
            (function (e) {
              return yt.isArray(e) && !e.some(xt);
            })(e)) ||
          ((yt.isFileList(e) || yt.endsWith(n, "[]")) && (s = yt.toArray(e)))
        )
          return (
            (n = St(n)),
            s.forEach(function (e, r) {
              !yt.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === i ? Et([n], r, a) : null === i ? n : n + "[]",
                  l(e)
                );
            }),
            !1
          );
      return !!xt(e) || (t.append(Et(o, n, a), l(e)), !1);
    }
    const c = [],
      d = Object.assign(_t, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: xt,
      });
    if (!yt.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!yt.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            yt.forEach(n, function (n, a) {
              !0 ===
                (!(yt.isUndefined(n) || null === n) &&
                  o.call(t, n, yt.isString(a) ? a.trim() : a, r, d)) &&
                e(n, r ? r.concat(a) : [a]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  };
  function Nt(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Ot(e, t) {
    (this._pairs = []), e && Ct(e, this, t);
  }
  const Rt = Ot.prototype;
  (Rt.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Rt.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Nt);
          }
        : Nt;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const Tt = Ot;
  function Pt(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function jt(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || Pt,
      o = n && n.serialize;
    let a;
    if (
      ((a = o
        ? o(t, n)
        : yt.isURLSearchParams(t)
        ? t.toString()
        : new Tt(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  const Lt = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        yt.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    At = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    zt = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : Tt,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Dt = "undefined" !== typeof window && "undefined" !== typeof document,
    Ft = ("object" === typeof navigator && navigator) || void 0,
    Bt =
      Dt &&
      (!Ft || ["ReactNative", "NativeScript", "NS"].indexOf(Ft.product) < 0),
    Ut =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    It = (Dt && window.location.href) || "http://localhost",
    Mt = { ...r, ...zt };
  const qt = function (e) {
    function t(e, n, r, o) {
      let a = e[o++];
      if ("__proto__" === a) return !0;
      const i = Number.isFinite(+a),
        s = o >= e.length;
      if (((a = !a && yt.isArray(r) ? r.length : a), s))
        return yt.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i;
      (r[a] && yt.isObject(r[a])) || (r[a] = []);
      return (
        t(e, n, r[a], o) &&
          yt.isArray(r[a]) &&
          (r[a] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const o = n.length;
            let a;
            for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
            return t;
          })(r[a])),
        !i
      );
    }
    if (yt.isFormData(e) && yt.isFunction(e.entries)) {
      const n = {};
      return (
        yt.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return yt
                .matchAll(/\w+|\[(\w*)]/g, e)
                .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  };
  const Vt = {
    transitional: At,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          o = yt.isObject(e);
        o && yt.isHTMLForm(e) && (e = new FormData(e));
        if (yt.isFormData(e)) return r ? JSON.stringify(qt(e)) : e;
        if (
          yt.isArrayBuffer(e) ||
          yt.isBuffer(e) ||
          yt.isStream(e) ||
          yt.isFile(e) ||
          yt.isBlob(e) ||
          yt.isReadableStream(e)
        )
          return e;
        if (yt.isArrayBufferView(e)) return e.buffer;
        if (yt.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let a;
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Ct(
                e,
                new Mt.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return Mt.isNode && yt.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((a = yt.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Ct(
              a ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return o || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (yt.isString(e))
                try {
                  return (t || JSON.parse)(e), yt.trim(e);
                } catch (Jo) {
                  if ("SyntaxError" !== Jo.name) throw Jo;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || Vt.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (yt.isResponse(e) || yt.isReadableStream(e)) return e;
        if (e && yt.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (Jo) {
            if (n) {
              if ("SyntaxError" === Jo.name)
                throw kt.from(
                  Jo,
                  kt.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw Jo;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Mt.classes.FormData, Blob: Mt.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  yt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Vt.headers[e] = {};
  });
  const Ht = Vt,
    Wt = yt.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    $t = Symbol("internals");
  function Qt(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Kt(e) {
    return !1 === e || null == e ? e : yt.isArray(e) ? e.map(Kt) : String(e);
  }
  function Gt(e, t, n, r, o) {
    return yt.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        yt.isString(t)
          ? yt.isString(r)
            ? -1 !== t.indexOf(r)
            : yt.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class Yt {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = Qt(t);
        if (!o) throw new Error("header name must be a non-empty string");
        const a = yt.findKey(r, o);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = Kt(e));
      }
      const a = (e, t) => yt.forEach(e, (e, n) => o(e, n, t));
      if (yt.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        yt.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(
          ((e) => {
            const t = {};
            let n, r, o;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (o = e.indexOf(":")),
                    (n = e.substring(0, o).trim().toLowerCase()),
                    (r = e.substring(o + 1).trim()),
                    !n ||
                      (t[n] && Wt[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (yt.isHeaders(e)) for (const [i, s] of e.entries()) o(s, i, n);
      else null != e && o(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = Qt(e))) {
        const n = yt.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (yt.isFunction(t)) return t.call(this, e, n);
          if (yt.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = Qt(e))) {
        const n = yt.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !Gt(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = Qt(e))) {
          const o = yt.findKey(n, e);
          !o || (t && !Gt(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return yt.isArray(e) ? e.forEach(o) : o(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !Gt(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        yt.forEach(this, (r, o) => {
          const a = yt.findKey(n, o);
          if (a) return (t[a] = Kt(r)), void delete t[o];
          const i = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          i !== o && delete t[o], (t[i] = Kt(r)), (n[i] = !0);
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        yt.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && yt.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return r.forEach((e) => t.set(e)), t;
    }
    static accessor(e) {
      const t = (this[$t] = this[$t] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = Qt(e);
        t[r] ||
          (!(function (e, t) {
            const n = yt.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return yt.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  Yt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    yt.reduceDescriptors(Yt.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    yt.freezeMethods(Yt);
  const Jt = Yt;
  function Xt(e, t) {
    const n = this || Ht,
      r = t || n,
      o = Jt.from(r.headers);
    let a = r.data;
    return (
      yt.forEach(e, function (e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function Zt(e) {
    return !(!e || !e.__CANCEL__);
  }
  function en(e, t, n) {
    kt.call(this, null == e ? "canceled" : e, kt.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  yt.inherits(en, kt, { __CANCEL__: !0 });
  const tn = en;
  function nn(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new kt(
            "Request failed with status code " + n.status,
            [kt.ERR_BAD_REQUEST, kt.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const rn = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let o,
      a = 0,
      i = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (s) {
        const l = Date.now(),
          u = r[i];
        o || (o = l), (n[a] = s), (r[a] = l);
        let c = i,
          d = 0;
        for (; c !== a; ) (d += n[c++]), (c %= e);
        if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), l - o < t))
          return;
        const f = u && l - u;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const on = function (e, t) {
      let n,
        r,
        o = 0,
        a = 1e3 / t;
      const i = function (t) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        (o = a),
          (n = null),
          r && (clearTimeout(r), (r = null)),
          e.apply(null, t);
      };
      return [
        function () {
          const e = Date.now(),
            t = e - o;
          for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
          t >= a
            ? i(l, e)
            : ((n = l),
              r ||
                (r = setTimeout(() => {
                  (r = null), i(n);
                }, a - t)));
        },
        () => n && i(n),
      ];
    },
    an = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const o = rn(50, 250);
      return on((n) => {
        const a = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          s = a - r,
          l = o(s);
        r = a;
        e({
          loaded: a,
          total: i,
          progress: i ? a / i : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && i && a <= i ? (i - a) / l : void 0,
          event: n,
          lengthComputable: null != i,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    sn = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    ln = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return yt.asap(() => e(...n));
      },
    un = Mt.hasStandardBrowserEnv
      ? (function () {
          const e =
              Mt.navigator && /(msie|trident)/i.test(Mt.navigator.userAgent),
            t = document.createElement("a");
          let n;
          function r(n) {
            let r = n;
            return (
              e && (t.setAttribute("href", r), (r = t.href)),
              t.setAttribute("href", r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = r(window.location.href)),
            function (e) {
              const t = yt.isString(e) ? r(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    cn = Mt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, o, a) {
            const i = [e + "=" + encodeURIComponent(t)];
            yt.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
              yt.isString(r) && i.push("path=" + r),
              yt.isString(o) && i.push("domain=" + o),
              !0 === a && i.push("secure"),
              (document.cookie = i.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function dn(e, t) {
    return e &&
      !(function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      })(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const fn = (e) => (e instanceof Jt ? { ...e } : e);
  function pn(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return yt.isPlainObject(e) && yt.isPlainObject(t)
        ? yt.merge.call({ caseless: n }, e, t)
        : yt.isPlainObject(t)
        ? yt.merge({}, t)
        : yt.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, n) {
      return yt.isUndefined(t)
        ? yt.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function a(e, t) {
      if (!yt.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return yt.isUndefined(t)
        ? yt.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function s(n, o, a) {
      return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
    }
    const l = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: s,
      headers: (e, t) => o(fn(e), fn(t), !0),
    };
    return (
      yt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = l[r] || o,
          i = a(e[r], t[r], r);
        (yt.isUndefined(i) && a !== s) || (n[r] = i);
      }),
      n
    );
  }
  const hn = (e) => {
      const t = pn({}, e);
      let n,
        {
          data: r,
          withXSRFToken: o,
          xsrfHeaderName: a,
          xsrfCookieName: i,
          headers: s,
          auth: l,
        } = t;
      if (
        ((t.headers = s = Jt.from(s)),
        (t.url = jt(dn(t.baseURL, t.url), e.params, e.paramsSerializer)),
        l &&
          s.set(
            "Authorization",
            "Basic " +
              btoa(
                (l.username || "") +
                  ":" +
                  (l.password ? unescape(encodeURIComponent(l.password)) : "")
              )
          ),
        yt.isFormData(r))
      )
        if (Mt.hasStandardBrowserEnv || Mt.hasStandardBrowserWebWorkerEnv)
          s.setContentType(void 0);
        else if (!1 !== (n = s.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          s.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        Mt.hasStandardBrowserEnv &&
        (o && yt.isFunction(o) && (o = o(t)), o || (!1 !== o && un(t.url)))
      ) {
        const e = a && i && cn.read(i);
        e && s.set(a, e);
      }
      return t;
    },
    mn =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = hn(e);
          let o = r.data;
          const a = Jt.from(r.headers).normalize();
          let i,
            s,
            l,
            u,
            c,
            { responseType: d, onUploadProgress: f, onDownloadProgress: p } = r;
          function h() {
            u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(i),
              r.signal && r.signal.removeEventListener("abort", i);
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const r = Jt.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders()
            );
            nn(
              function (e) {
                t(e), h();
              },
              function (e) {
                n(e), h();
              },
              {
                data:
                  d && "text" !== d && "json" !== d
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              }
            ),
              (m = null);
          }
          m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new kt("Request aborted", kt.ECONNABORTED, e, m)),
                (m = null));
            }),
            (m.onerror = function () {
              n(new kt("Network Error", kt.ERR_NETWORK, e, m)), (m = null);
            }),
            (m.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const o = r.transitional || At;
              r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new kt(
                    t,
                    o.clarifyTimeoutError ? kt.ETIMEDOUT : kt.ECONNABORTED,
                    e,
                    m
                  )
                ),
                (m = null);
            }),
            void 0 === o && a.setContentType(null),
            "setRequestHeader" in m &&
              yt.forEach(a.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            yt.isUndefined(r.withCredentials) ||
              (m.withCredentials = !!r.withCredentials),
            d && "json" !== d && (m.responseType = r.responseType),
            p && (([l, c] = an(p, !0)), m.addEventListener("progress", l)),
            f &&
              m.upload &&
              (([s, u] = an(f)),
              m.upload.addEventListener("progress", s),
              m.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                m &&
                  (n(!t || t.type ? new tn(null, e, m) : t),
                  m.abort(),
                  (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal &&
                (r.signal.aborted
                  ? i()
                  : r.signal.addEventListener("abort", i)));
          const y = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          y && -1 === Mt.protocols.indexOf(y)
            ? n(
                new kt("Unsupported protocol " + y + ":", kt.ERR_BAD_REQUEST, e)
              )
            : m.send(o || null);
        });
      },
    gn = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const o = function (e) {
          if (!n) {
            (n = !0), i();
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof kt ? t : new tn(t instanceof Error ? t.message : t)
            );
          }
        };
        let a =
          t &&
          setTimeout(() => {
            (a = null), o(new kt(`timeout ${t} of ms exceeded`, kt.ETIMEDOUT));
          }, t);
        const i = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(o)
                : e.removeEventListener("abort", o);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", o));
        const { signal: s } = r;
        return (s.unsubscribe = () => yt.asap(i)), s;
      }
    },
    yn = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        o = 0;
      for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
    },
    vn = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    bn = (e, t, n, r) => {
      const o = (async function* (e, t) {
        for await (const n of vn(e)) yield* yn(n, t);
      })(e, t);
      let a,
        i = 0,
        s = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await o.next();
              if (t) return s(), void e.close();
              let a = r.byteLength;
              if (n) {
                let e = (i += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (s(t), t);
            }
          },
          cancel: (e) => (s(e), o.return()),
        },
        { highWaterMark: 2 }
      );
    },
    wn =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    kn = wn && "function" === typeof ReadableStream,
    xn =
      wn &&
      ("function" === typeof TextEncoder
        ? ((Sn = new TextEncoder()), (e) => Sn.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var Sn;
  const En = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (Jo) {
        return !1;
      }
    },
    _n =
      kn &&
      En(() => {
        let e = !1;
        const t = new Request(Mt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    Cn = kn && En(() => yt.isReadableStream(new Response("").body)),
    Nn = { stream: Cn && ((e) => e.body) };
  var On;
  wn &&
    ((On = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !Nn[e] &&
        (Nn[e] = yt.isFunction(On[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new kt(
                `Response type '${e}' is not supported`,
                kt.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const Rn = async (e, t) => {
      const n = yt.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) => {
            if (null == e) return 0;
            if (yt.isBlob(e)) return e.size;
            if (yt.isSpecCompliantForm(e)) {
              const t = new Request(Mt.origin, { method: "POST", body: e });
              return (await t.arrayBuffer()).byteLength;
            }
            return yt.isArrayBufferView(e) || yt.isArrayBuffer(e)
              ? e.byteLength
              : (yt.isURLSearchParams(e) && (e += ""),
                yt.isString(e) ? (await xn(e)).byteLength : void 0);
          })(t)
        : n;
    },
    Tn =
      wn &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: o,
          cancelToken: a,
          timeout: i,
          onDownloadProgress: s,
          onUploadProgress: l,
          responseType: u,
          headers: c,
          withCredentials: d = "same-origin",
          fetchOptions: f,
        } = hn(e);
        u = u ? (u + "").toLowerCase() : "text";
        let p,
          h = gn([o, a && a.toAbortSignal()], i);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let g;
        try {
          if (
            l &&
            _n &&
            "get" !== n &&
            "head" !== n &&
            0 !== (g = await Rn(c, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              (yt.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                c.setContentType(e),
              n.body)
            ) {
              const [e, t] = sn(g, an(ln(l)));
              r = bn(n.body, 65536, e, t);
            }
          }
          yt.isString(d) || (d = d ? "include" : "omit");
          const o = "credentials" in Request.prototype;
          p = new Request(t, {
            ...f,
            signal: h,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: o ? d : void 0,
          });
          let a = await fetch(p);
          const i = Cn && ("stream" === u || "response" === u);
          if (Cn && (s || (i && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = a[t];
            });
            const t = yt.toFiniteNumber(a.headers.get("content-length")),
              [n, r] = (s && sn(t, an(ln(s), !0))) || [];
            a = new Response(
              bn(a.body, 65536, n, () => {
                r && r(), m && m();
              }),
              e
            );
          }
          u = u || "text";
          let y = await Nn[yt.findKey(Nn, u) || "text"](a, e);
          return (
            !i && m && m(),
            await new Promise((t, n) => {
              nn(t, n, {
                data: y,
                headers: Jt.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: p,
              });
            })
          );
        } catch (y) {
          if (
            (m && m(), y && "TypeError" === y.name && /fetch/i.test(y.message))
          )
            throw Object.assign(new kt("Network Error", kt.ERR_NETWORK, e, p), {
              cause: y.cause || y,
            });
          throw kt.from(y, y && y.code, e, p);
        }
      }),
    Pn = { http: null, xhr: mn, fetch: Tn };
  yt.forEach(Pn, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (Jo) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const jn = (e) => `- ${e}`,
    Ln = (e) => yt.isFunction(e) || null === e || !1 === e,
    An = (e) => {
      e = yt.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (
          ((n = e[a]),
          (r = n),
          !Ln(n) && ((r = Pn[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new kt(`Unknown adapter '${t}'`);
        if (r) break;
        o[t || "#" + a] = r;
      }
      if (!r) {
        const e = Object.entries(o).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(jn).join("\n")
            : " " + jn(e[0])
          : "as no adapter specified";
        throw new kt(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function zn(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new tn(null, e);
  }
  function Dn(e) {
    zn(e),
      (e.headers = Jt.from(e.headers)),
      (e.data = Xt.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return An(e.adapter || Ht.adapter)(e).then(
      function (t) {
        return (
          zn(e),
          (t.data = Xt.call(e, e.transformResponse, t)),
          (t.headers = Jt.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          Zt(t) ||
            (zn(e),
            t &&
              t.response &&
              ((t.response.data = Xt.call(e, e.transformResponse, t.response)),
              (t.response.headers = Jt.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const Fn = "1.7.7",
    Bn = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Bn[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Un = {};
  Bn.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.7.7] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, o, a) => {
      if (!1 === e)
        throw new kt(
          r(o, " has been removed" + (t ? " in " + t : "")),
          kt.ERR_DEPRECATED
        );
      return (
        t &&
          !Un[o] &&
          ((Un[o] = !0),
          console.warn(
            r(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, o, a)
      );
    };
  };
  const In = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new kt("options must be an object", kt.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const a = r[o],
            i = t[a];
          if (i) {
            const t = e[a],
              n = void 0 === t || i(t, a, e);
            if (!0 !== n)
              throw new kt(
                "option " + a + " must be " + n,
                kt.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new kt("Unknown option " + a, kt.ERR_BAD_OPTION);
        }
      },
      validators: Bn,
    },
    Mn = In.validators;
  class qn {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new Lt(), response: new Lt() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e;
          Error.captureStackTrace
            ? Error.captureStackTrace((e = {}))
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (Jo) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = pn(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      void 0 !== n &&
        In.assertOptions(
          n,
          {
            silentJSONParsing: Mn.transitional(Mn.boolean),
            forcedJSONParsing: Mn.transitional(Mn.boolean),
            clarifyTimeoutError: Mn.transitional(Mn.boolean),
          },
          !1
        ),
        null != r &&
          (yt.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : In.assertOptions(
                r,
                { encode: Mn.function, serialize: Mn.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let a = o && yt.merge(o.common, o[t.method]);
      o &&
        yt.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete o[e];
          }
        ),
        (t.headers = Jt.concat(a, o));
      const i = [];
      let s = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!s) {
        const e = [Dn.bind(this), void 0];
        for (
          e.unshift.apply(e, i),
            e.push.apply(e, l),
            c = e.length,
            u = Promise.resolve(t);
          d < c;

        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = i.length;
      let f = t;
      for (d = 0; d < c; ) {
        const e = i[d++],
          t = i[d++];
        try {
          f = e(f);
        } catch (p) {
          t.call(this, p);
          break;
        }
      }
      try {
        u = Dn.call(this, f);
      } catch (p) {
        return Promise.reject(p);
      }
      for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
      return u;
    }
    getUri(e) {
      return jt(
        dn((e = pn(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  }
  yt.forEach(["delete", "get", "head", "options"], function (e) {
    qn.prototype[e] = function (t, n) {
      return this.request(
        pn(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    yt.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            pn(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (qn.prototype[e] = t()), (qn.prototype[e + "Form"] = t(!0));
    });
  const Vn = qn;
  class Hn {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new tn(e, r, o)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new Hn(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Wn = Hn;
  const $n = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries($n).forEach((e) => {
    let [t, n] = e;
    $n[n] = t;
  });
  const Qn = $n;
  const Kn = (function e(t) {
    const n = new Vn(t),
      r = je(Vn.prototype.request, n);
    return (
      yt.extend(r, Vn.prototype, n, { allOwnKeys: !0 }),
      yt.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(pn(t, n));
      }),
      r
    );
  })(Ht);
  (Kn.Axios = Vn),
    (Kn.CanceledError = tn),
    (Kn.CancelToken = Wn),
    (Kn.isCancel = Zt),
    (Kn.VERSION = Fn),
    (Kn.toFormData = Ct),
    (Kn.AxiosError = kt),
    (Kn.Cancel = Kn.CanceledError),
    (Kn.all = function (e) {
      return Promise.all(e);
    }),
    (Kn.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Kn.isAxiosError = function (e) {
      return yt.isObject(e) && !0 === e.isAxiosError;
    }),
    (Kn.mergeConfig = pn),
    (Kn.AxiosHeaders = Jt),
    (Kn.formToJSON = (e) => qt(yt.isHTMLForm(e) ? new FormData(e) : e)),
    (Kn.getAdapter = An),
    (Kn.HttpStatusCode = Qn),
    (Kn.default = Kn);
  const Gn = Kn;
  var Yn = n(579);
  const Jn = (0, i.createContext)(),
    Xn = () => (0, i.useContext)(Jn),
    Zn = (e) => {
      let { children: t } = e;
      const [n, r] = (0, i.useState)(!1),
        [o, a] = (0, i.useState)(null),
        [s, l] = (0, i.useState)(null),
        [u, c] = (0, i.useState)(!0),
        [d, f] = (0, i.useState)([]),
        [p, h] = (0, i.useState)([]),
        m = (0, i.useCallback)(async () => {
          c(!0);
          try {
            const { data: e } = await Gn.get(
              "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/userProfile",
              { withCredentials: !0 }
            );
            l(e), a(e._id);
          } catch (e) {
            console.error("Error while fetching user details:", e);
          } finally {
            c(!1);
          }
        }, []),
        g = (0, i.useCallback)(async () => {
          c(!0);
          try {
            const { data: e } = await Gn.get(
              "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/check",
              { withCredentials: !0 }
            );
            e.isAuthenticated ? (r(!0), m()) : r(!1);
          } catch (e) {
            console.error("Error checking authentication:", e);
          } finally {
            c(!1);
          }
        }, [m]),
        y = (0, i.useCallback)(async () => {
          c(!0);
          try {
            const { data: e } = await Gn.get(
              "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/users",
              { withCredentials: !0 }
            );
            f(e.users);
          } catch (e) {
            console.error("Error fetching users:", e);
          } finally {
            c(!1);
          }
        }, []),
        v = async () => {
          c(!0);
          try {
            const { data: e } = await Gn.get(
              "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/groups",
              { withCredentials: !0 }
            );
            h(e);
          } catch (e) {
            console.error("Error fetching groups:", e);
          } finally {
            c(!1);
          }
        };
      return (
        (0, i.useEffect)(() => {
          g();
        }, [g, y]),
        (0, i.useEffect)(() => {
          n && null === s && (m(), v(), y());
        }, [n, s, m, y]),
        (0, Yn.jsx)(Jn.Provider, {
          value: {
            isAuthenticate: n,
            loading: u,
            setIsAuthenticate: r,
            userData: s,
            users: d,
            userId: o,
            updateUser: async (e) => {
              c(!0);
              try {
                const { data: t } = await Gn.put(
                  "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/update",
                  { username: e },
                  { withCredentials: !0 }
                );
                l(t.updatedUser), m();
              } catch (t) {
                console.error("Error updating user:", t);
              } finally {
                c(!1);
              }
            },
            groups: p,
            fetchAllUsers: y,
            fetchUserGroups: v,
          },
          children: t,
        })
      );
    },
    er = (e) => {
      let { setPageToggle: t } = e;
      const [n, r] = (0, i.useState)(""),
        [o, a] = (0, i.useState)(""),
        [s, l] = (0, i.useState)(!1),
        { setIsAuthenticate: u, fetchAllUsers: c, fetchUserGroups: d } = Xn(),
        [f, p] = (0, i.useState)("");
      return s
        ? (0, Yn.jsx)("div", {
            children: (0, Yn.jsx)("div", {
              className: "flex justify-center items-center h-screen",
              children: (0, Yn.jsx)(Pe, { color: "#36D7B7" }),
            }),
          })
        : (0, Yn.jsxs)("div", {
            className: " p-5 bg-zinc-950",
            children: [
              (0, Yn.jsxs)("div", {
                className: "flex items-center justify-center mb-4",
                children: [
                  (0, Yn.jsx)("h1", {
                    className: "text-4xl text-green-400 mr-2",
                    children: "VIBELY",
                  }),
                  (0, Yn.jsx)("img", {
                    src: "/msg-gif-3-logo.gif",
                    alt: "Logo",
                    className: "w-12 h-12 ",
                  }),
                ],
              }),
              f &&
                (0, Yn.jsx)("div", {
                  className: "text-red-500 text-center mb-4",
                  children: f,
                }),
              (0, Yn.jsx)("h3", {
                className: "text-6xl text-center m-4 text-white",
                children: "Login",
              }),
              (0, Yn.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault(), p(""), l(!0);
                  try {
                    const e = await Gn.post(
                      "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/login",
                      { email: n, password: o },
                      { withCredentials: !0 }
                    );
                    e.data.success
                      ? (u(!0), c(), d())
                      : p(e.data.message || "Login failed.");
                  } catch (a) {
                    var t, r;
                    p(
                      (null === (t = a.response) ||
                      void 0 === t ||
                      null === (r = t.data) ||
                      void 0 === r
                        ? void 0
                        : r.message) || "An unexpected error occurred."
                    );
                  } finally {
                    l(!1);
                  }
                },
                className: "flex flex-col ",
                children: [
                  (0, Yn.jsx)("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    onChange: (e) => r(e.target.value),
                    className:
                      "text-white p-3 m-3 bg-zinc-900 w-80 border-none ",
                  }),
                  (0, Yn.jsx)("input", {
                    type: "password",
                    placeholder: "Enter your password",
                    onChange: (e) => a(e.target.value),
                    className:
                      "text-white p-3 m-3 bg-zinc-900 w-80 border-none ",
                  }),
                  (0, Yn.jsx)("button", {
                    type: "submit",
                    className:
                      "bg-gradient-to-r from-green-300 to-green-700 p-3 m-3",
                    children: "Login",
                  }),
                ],
              }),
              (0, Yn.jsxs)("h4", {
                className: "p-3 text-white",
                children: [
                  "Don't have an Account ?",
                  " ",
                  (0, Yn.jsx)("span", {
                    onClick: () => t((e) => !e),
                    className: "cursor-pointer text-blue-500 underline",
                    children: "Register",
                  }),
                ],
              }),
            ],
          });
    },
    tr = (e) => {
      let { setPageToggle: t } = e;
      const [n, r] = (0, i.useState)(),
        [o, a] = (0, i.useState)(),
        [s, l] = (0, i.useState)(),
        [u, c] = (0, i.useState)(),
        [d, f] = (0, i.useState)("");
      return u
        ? (0, Yn.jsx)("div", {
            children: (0, Yn.jsx)("div", {
              className: "flex justify-center items-center h-screen",
              children: (0, Yn.jsx)(Pe, { color: "#36D7B7" }),
            }),
          })
        : (0, Yn.jsxs)("div", {
            className: "p-5 bg-zinc-950",
            children: [
              (0, Yn.jsxs)("div", {
                className: "flex items-center justify-center mb-4",
                children: [
                  (0, Yn.jsx)("h1", {
                    className: "text-4xl text-green-400 mr-2",
                    children: "VIBELY",
                  }),
                  (0, Yn.jsx)("img", {
                    src: "/msg-gif-3-logo.gif",
                    alt: "Logo",
                    className: "w-12 h-12 ",
                  }),
                ],
              }),
              (0, Yn.jsx)("h3", {
                className: "text-6xl text-center m-4 text-white",
                children: "Register",
              }),
              d &&
                (0, Yn.jsx)("div", {
                  className: "text-red-500 text-center mb-4",
                  children: d,
                }),
              (0, Yn.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault(), f("");
                  try {
                    c(!0);
                    const e = await Gn.post(
                      "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/register",
                      { username: n, email: o, password: s },
                      { withCredentials: !0 }
                    );
                    e.data.success ? t((e) => !e) : f(e.data.message);
                  } catch (d) {
                    var r, a;
                    f(
                      (null === (r = d.response) ||
                      void 0 === r ||
                      null === (a = r.data) ||
                      void 0 === a
                        ? void 0
                        : a.message) || d.message
                    );
                  } finally {
                    c(!1);
                  }
                },
                className: "flex flex-col ",
                children: [
                  (0, Yn.jsx)("input", {
                    type: "text",
                    placeholder: "Enter your username",
                    onChange: (e) => r(e.target.value),
                    className:
                      "text-white p-3 m-3 bg-zinc-900 w-80 border-none",
                  }),
                  (0, Yn.jsx)("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    onChange: (e) => a(e.target.value),
                    className:
                      "text-white p-3 m-3 bg-zinc-900 w-80 border-none",
                  }),
                  (0, Yn.jsx)("input", {
                    type: "password",
                    placeholder: "Enter your password",
                    onChange: (e) => l(e.target.value),
                    className:
                      "text-white p-3 m-3 bg-zinc-900 w-80 border-none",
                  }),
                  (0, Yn.jsx)("button", {
                    type: "submit",
                    className:
                      "bg-gradient-to-r from-green-300 to-green-700 p-3 m-2",
                    children: "Register",
                  }),
                ],
              }),
              (0, Yn.jsxs)("h4", {
                className: "p-3  text-white",
                children: [
                  "Already have an Account?",
                  " ",
                  (0, Yn.jsx)("span", {
                    onClick: () => t((e) => !e),
                    className: "cursor-pointer text-blue-500 underline",
                    children: "Login",
                  }),
                ],
              }),
            ],
          });
    },
    nr = () => {
      const [e, t] = (0, i.useState)(!0);
      return (0, Yn.jsx)("div", {
        className: "flex justify-center items-center h-screen bg-black",
        children: (0, Yn.jsx)("div", {
          className: "relative z-10",
          children: e
            ? (0, Yn.jsx)(er, { setPageToggle: t })
            : (0, Yn.jsx)(tr, { setPageToggle: t }),
        }),
      });
    },
    rr = (e) => {
      let { isOpen: t, onClose: n, title: r, children: o } = e;
      return t
        ? (0, Yn.jsx)("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
            children: (0, Yn.jsxs)("div", {
              className: "bg-zinc-900 w-11/12 md:w-1/3 rounded-lg p-6 relative",
              children: [
                (0, Yn.jsx)("button", {
                  onClick: n,
                  className:
                    "absolute top-2 right-2 text-gray-600 hover:text-gray-800",
                  children: "\u2715 ",
                }),
                (0, Yn.jsx)("h2", {
                  className:
                    "text-2xl font-semibold mb-4 text-center text-white",
                  children: r,
                }),
                (0, Yn.jsx)("div", { children: o }),
              ],
            }),
          })
        : null;
    },
    or = Object.create(null);
  (or.open = "0"),
    (or.close = "1"),
    (or.ping = "2"),
    (or.pong = "3"),
    (or.message = "4"),
    (or.upgrade = "5"),
    (or.noop = "6");
  const ar = Object.create(null);
  Object.keys(or).forEach((e) => {
    ar[or[e]] = e;
  });
  const ir = { type: "error", data: "parser error" },
    sr =
      "function" === typeof Blob ||
      ("undefined" !== typeof Blob &&
        "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
    lr = "function" === typeof ArrayBuffer,
    ur = (e) =>
      "function" === typeof ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer instanceof ArrayBuffer,
    cr = (e, t, n) => {
      let { type: r, data: o } = e;
      return sr && o instanceof Blob
        ? t
          ? n(o)
          : dr(o, n)
        : lr && (o instanceof ArrayBuffer || ur(o))
        ? t
          ? n(o)
          : dr(new Blob([o]), n)
        : n(or[r] + (o || ""));
    },
    dr = (e, t) => {
      const n = new FileReader();
      return (
        (n.onload = function () {
          const e = n.result.split(",")[1];
          t("b" + (e || ""));
        }),
        n.readAsDataURL(e)
      );
    };
  function fr(e) {
    return e instanceof Uint8Array
      ? e
      : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  let pr;
  const hr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    mr = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
  for (let Zo = 0; Zo < 64; Zo++) mr[hr.charCodeAt(Zo)] = Zo;
  const gr = "function" === typeof ArrayBuffer,
    yr = (e, t) => {
      if ("string" !== typeof e) return { type: "message", data: br(e, t) };
      const n = e.charAt(0);
      if ("b" === n) return { type: "message", data: vr(e.substring(1), t) };
      return ar[n]
        ? e.length > 1
          ? { type: ar[n], data: e.substring(1) }
          : { type: ar[n] }
        : ir;
    },
    vr = (e, t) => {
      if (gr) {
        const n = ((e) => {
          let t,
            n,
            r,
            o,
            a,
            i = 0.75 * e.length,
            s = e.length,
            l = 0;
          "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
          const u = new ArrayBuffer(i),
            c = new Uint8Array(u);
          for (t = 0; t < s; t += 4)
            (n = mr[e.charCodeAt(t)]),
              (r = mr[e.charCodeAt(t + 1)]),
              (o = mr[e.charCodeAt(t + 2)]),
              (a = mr[e.charCodeAt(t + 3)]),
              (c[l++] = (n << 2) | (r >> 4)),
              (c[l++] = ((15 & r) << 4) | (o >> 2)),
              (c[l++] = ((3 & o) << 6) | (63 & a));
          return u;
        })(e);
        return br(n, t);
      }
      return { base64: !0, data: e };
    },
    br = (e, t) =>
      "blob" === t
        ? e instanceof Blob
          ? e
          : new Blob([e])
        : e instanceof ArrayBuffer
        ? e
        : e.buffer,
    wr = String.fromCharCode(30);
  function kr() {
    return new TransformStream({
      transform(e, t) {
        !(function (e, t) {
          sr && e.data instanceof Blob
            ? e.data.arrayBuffer().then(fr).then(t)
            : lr && (e.data instanceof ArrayBuffer || ur(e.data))
            ? t(fr(e.data))
            : cr(e, !1, (e) => {
                pr || (pr = new TextEncoder()), t(pr.encode(e));
              });
        })(e, (n) => {
          const r = n.length;
          let o;
          if (r < 126)
            (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r);
          else if (r < 65536) {
            o = new Uint8Array(3);
            const e = new DataView(o.buffer);
            e.setUint8(0, 126), e.setUint16(1, r);
          } else {
            o = new Uint8Array(9);
            const e = new DataView(o.buffer);
            e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
          }
          e.data && "string" !== typeof e.data && (o[0] |= 128),
            t.enqueue(o),
            t.enqueue(n);
        });
      },
    });
  }
  let xr;
  function Sr(e) {
    return e.reduce((e, t) => e + t.length, 0);
  }
  function Er(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let o = 0; o < t; o++)
      (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
  }
  function _r(e) {
    if (e)
      return (function (e) {
        for (var t in _r.prototype) e[t] = _r.prototype[t];
        return e;
      })(e);
  }
  (_r.prototype.on = _r.prototype.addEventListener =
    function (e, t) {
      return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
      );
    }),
    (_r.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }
      return (n.fn = t), this.on(e, n), this;
    }),
    (_r.prototype.off =
      _r.prototype.removeListener =
      _r.prototype.removeAllListeners =
      _r.prototype.removeEventListener =
        function (e, t) {
          if (
            ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
          )
            return (this._callbacks = {}), this;
          var n,
            r = this._callbacks["$" + e];
          if (!r) return this;
          if (1 == arguments.length)
            return delete this._callbacks["$" + e], this;
          for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
              r.splice(o, 1);
              break;
            }
          return 0 === r.length && delete this._callbacks["$" + e], this;
        }),
    (_r.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      for (
        var t = new Array(arguments.length - 1),
          n = this._callbacks["$" + e],
          r = 1;
        r < arguments.length;
        r++
      )
        t[r - 1] = arguments[r];
      if (n) {
        r = 0;
        for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
      }
      return this;
    }),
    (_r.prototype.emitReserved = _r.prototype.emit),
    (_r.prototype.listeners = function (e) {
      return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
      );
    }),
    (_r.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    });
  const Cr =
      "function" === typeof Promise && "function" === typeof Promise.resolve
        ? (e) => Promise.resolve().then(e)
        : (e, t) => t(e, 0),
    Nr =
      "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : Function("return this")();
  function Or(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return n.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
  }
  const Rr = Nr.setTimeout,
    Tr = Nr.clearTimeout;
  function Pr(e, t) {
    t.useNativeTimers
      ? ((e.setTimeoutFn = Rr.bind(Nr)), (e.clearTimeoutFn = Tr.bind(Nr)))
      : ((e.setTimeoutFn = Nr.setTimeout.bind(Nr)),
        (e.clearTimeoutFn = Nr.clearTimeout.bind(Nr)));
  }
  function jr() {
    return (
      Date.now().toString(36).substring(3) +
      Math.random().toString(36).substring(2, 5)
    );
  }
  class Lr extends Error {
    constructor(e, t, n) {
      super(e),
        (this.description = t),
        (this.context = n),
        (this.type = "TransportError");
    }
  }
  class Ar extends _r {
    constructor(e) {
      super(),
        (this.writable = !1),
        Pr(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.socket = e.socket),
        (this.supportsBinary = !e.forceBase64);
    }
    onError(e, t, n) {
      return super.emitReserved("error", new Lr(e, t, n)), this;
    }
    open() {
      return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
      return (
        ("opening" !== this.readyState && "open" !== this.readyState) ||
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(e) {
      "open" === this.readyState && this.write(e);
    }
    onOpen() {
      (this.readyState = "open"),
        (this.writable = !0),
        super.emitReserved("open");
    }
    onData(e) {
      const t = yr(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emitReserved("packet", e);
    }
    onClose(e) {
      (this.readyState = "closed"), super.emitReserved("close", e);
    }
    pause(e) {}
    createUri(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (
        e +
        "://" +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(t)
      );
    }
    _hostname() {
      const e = this.opts.hostname;
      return -1 === e.indexOf(":") ? e : "[" + e + "]";
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && Number(443 !== this.opts.port)) ||
          (!this.opts.secure && 80 !== Number(this.opts.port)))
        ? ":" + this.opts.port
        : "";
    }
    _query(e) {
      const t = (function (e) {
        let t = "";
        for (let n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
        return t;
      })(e);
      return t.length ? "?" + t : "";
    }
  }
  class zr extends Ar {
    constructor() {
      super(...arguments), (this._polling = !1);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this._poll();
    }
    pause(e) {
      this.readyState = "pausing";
      const t = () => {
        (this.readyState = "paused"), e();
      };
      if (this._polling || !this.writable) {
        let e = 0;
        this._polling &&
          (e++,
          this.once("pollComplete", function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once("drain", function () {
              --e || t();
            }));
      } else t();
    }
    _poll() {
      (this._polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(e) {
      ((e, t) => {
        const n = e.split(wr),
          r = [];
        for (let o = 0; o < n.length; o++) {
          const e = yr(n[o], t);
          if ((r.push(e), "error" === e.type)) break;
        }
        return r;
      })(e, this.socket.binaryType).forEach((e) => {
        if (
          ("opening" === this.readyState && "open" === e.type && this.onOpen(),
          "close" === e.type)
        )
          return (
            this.onClose({ description: "transport closed by the server" }), !1
          );
        this.onPacket(e);
      }),
        "closed" !== this.readyState &&
          ((this._polling = !1),
          this.emitReserved("pollComplete"),
          "open" === this.readyState && this._poll());
    }
    doClose() {
      const e = () => {
        this.write([{ type: "close" }]);
      };
      "open" === this.readyState ? e() : this.once("open", e);
    }
    write(e) {
      (this.writable = !1),
        ((e, t) => {
          const n = e.length,
            r = new Array(n);
          let o = 0;
          e.forEach((e, a) => {
            cr(e, !1, (e) => {
              (r[a] = e), ++o === n && t(r.join(wr));
            });
          });
        })(e, (e) => {
          this.doWrite(e, () => {
            (this.writable = !0), this.emitReserved("drain");
          });
        });
    }
    uri() {
      const e = this.opts.secure ? "https" : "http",
        t = this.query || {};
      return (
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = jr()),
        this.supportsBinary || t.sid || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  }
  let Dr = !1;
  try {
    Dr =
      "undefined" !== typeof XMLHttpRequest &&
      "withCredentials" in new XMLHttpRequest();
  } catch (Xo) {}
  const Fr = Dr;
  function Br() {}
  class Ur extends zr {
    constructor(e) {
      if ((super(e), "undefined" !== typeof location)) {
        const t = "https:" === location.protocol;
        let n = location.port;
        n || (n = t ? "443" : "80"),
          (this.xd =
            ("undefined" !== typeof location &&
              e.hostname !== location.hostname) ||
            n !== e.port);
      }
    }
    doWrite(e, t) {
      const n = this.request({ method: "POST", data: e });
      n.on("success", t),
        n.on("error", (e, t) => {
          this.onError("xhr post error", e, t);
        });
    }
    doPoll() {
      const e = this.request();
      e.on("data", this.onData.bind(this)),
        e.on("error", (e, t) => {
          this.onError("xhr poll error", e, t);
        }),
        (this.pollXhr = e);
    }
  }
  class Ir extends _r {
    constructor(e, t, n) {
      super(),
        (this.createRequest = e),
        Pr(this, n),
        (this._opts = n),
        (this._method = n.method || "GET"),
        (this._uri = t),
        (this._data = void 0 !== n.data ? n.data : null),
        this._create();
    }
    _create() {
      var e;
      const t = Or(
        this._opts,
        "agent",
        "pfx",
        "key",
        "passphrase",
        "cert",
        "ca",
        "ciphers",
        "rejectUnauthorized",
        "autoUnref"
      );
      t.xdomain = !!this._opts.xd;
      const n = (this._xhr = this.createRequest(t));
      try {
        n.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
            for (let e in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(e) &&
                n.setRequestHeader(e, this._opts.extraHeaders[e]);
          }
        } catch (Jo) {}
        if ("POST" === this._method)
          try {
            n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (Jo) {}
        try {
          n.setRequestHeader("Accept", "*/*");
        } catch (Jo) {}
        null === (e = this._opts.cookieJar) || void 0 === e || e.addCookies(n),
          "withCredentials" in n &&
            (n.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
          (n.onreadystatechange = () => {
            var e;
            3 === n.readyState &&
              (null === (e = this._opts.cookieJar) ||
                void 0 === e ||
                e.parseCookies(n.getResponseHeader("set-cookie"))),
              4 === n.readyState &&
                (200 === n.status || 1223 === n.status
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError(
                        "number" === typeof n.status ? n.status : 0
                      );
                    }, 0));
          }),
          n.send(this._data);
      } catch (Jo) {
        return void this.setTimeoutFn(() => {
          this._onError(Jo);
        }, 0);
      }
      "undefined" !== typeof document &&
        ((this._index = Ir.requestsCount++), (Ir.requests[this._index] = this));
    }
    _onError(e) {
      this.emitReserved("error", e, this._xhr), this._cleanup(!0);
    }
    _cleanup(e) {
      if ("undefined" !== typeof this._xhr && null !== this._xhr) {
        if (((this._xhr.onreadystatechange = Br), e))
          try {
            this._xhr.abort();
          } catch (Jo) {}
        "undefined" !== typeof document && delete Ir.requests[this._index],
          (this._xhr = null);
      }
    }
    _onLoad() {
      const e = this._xhr.responseText;
      null !== e &&
        (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  }
  if (
    ((Ir.requestsCount = 0),
    (Ir.requests = {}),
    "undefined" !== typeof document)
  )
    if ("function" === typeof attachEvent) attachEvent("onunload", Mr);
    else if ("function" === typeof addEventListener) {
      addEventListener("onpagehide" in Nr ? "pagehide" : "unload", Mr, !1);
    }
  function Mr() {
    for (let e in Ir.requests)
      Ir.requests.hasOwnProperty(e) && Ir.requests[e].abort();
  }
  const qr = (function () {
    const e = Vr({ xdomain: !1 });
    return e && null !== e.responseType;
  })();
  function Vr(e) {
    const t = e.xdomain;
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!t || Fr))
        return new XMLHttpRequest();
    } catch (Jo) {}
    if (!t)
      try {
        return new Nr[["Active"].concat("Object").join("X")](
          "Microsoft.XMLHTTP"
        );
      } catch (Jo) {}
  }
  const Hr =
    "undefined" !== typeof navigator &&
    "string" === typeof navigator.product &&
    "reactnative" === navigator.product.toLowerCase();
  class Wr extends Ar {
    get name() {
      return "websocket";
    }
    doOpen() {
      const e = this.uri(),
        t = this.opts.protocols,
        n = Hr
          ? {}
          : Or(
              this.opts,
              "agent",
              "perMessageDeflate",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "localAddress",
              "protocolVersion",
              "origin",
              "maxPayload",
              "family",
              "checkServerIdentity"
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(e, t, n);
      } catch (Xo) {
        return this.emitReserved("error", Xo);
      }
      (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
      (this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }),
        (this.ws.onclose = (e) =>
          this.onClose({
            description: "websocket connection closed",
            context: e,
          })),
        (this.ws.onmessage = (e) => this.onData(e.data)),
        (this.ws.onerror = (e) => this.onError("websocket error", e));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        const n = e[t],
          r = t === e.length - 1;
        cr(n, this.supportsBinary, (e) => {
          try {
            this.doWrite(n, e);
          } catch (Jo) {}
          r &&
            Cr(() => {
              (this.writable = !0), this.emitReserved("drain");
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      "undefined" !== typeof this.ws && (this.ws.close(), (this.ws = null));
    }
    uri() {
      const e = this.opts.secure ? "wss" : "ws",
        t = this.query || {};
      return (
        this.opts.timestampRequests && (t[this.opts.timestampParam] = jr()),
        this.supportsBinary || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  }
  const $r = Nr.WebSocket || Nr.MozWebSocket;
  const Qr = {
      websocket: class extends Wr {
        createSocket(e, t, n) {
          return Hr ? new $r(e, t, n) : t ? new $r(e, t) : new $r(e);
        }
        doWrite(e, t) {
          this.ws.send(t);
        }
      },
      webtransport: class extends Ar {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(
              this.createUri("https"),
              this.opts.transportOptions[this.name]
            );
          } catch (Xo) {
            return this.emitReserved("error", Xo);
          }
          this._transport.closed
            .then(() => {
              this.onClose();
            })
            .catch((e) => {
              this.onError("webtransport error", e);
            }),
            this._transport.ready.then(() => {
              this._transport.createBidirectionalStream().then((e) => {
                const t = (function (e, t) {
                    xr || (xr = new TextDecoder());
                    const n = [];
                    let r = 0,
                      o = -1,
                      a = !1;
                    return new TransformStream({
                      transform(i, s) {
                        for (n.push(i); ; ) {
                          if (0 === r) {
                            if (Sr(n) < 1) break;
                            const e = Er(n, 1);
                            (a = 128 === (128 & e[0])),
                              (o = 127 & e[0]),
                              (r = o < 126 ? 3 : 126 === o ? 1 : 2);
                          } else if (1 === r) {
                            if (Sr(n) < 2) break;
                            const e = Er(n, 2);
                            (o = new DataView(
                              e.buffer,
                              e.byteOffset,
                              e.length
                            ).getUint16(0)),
                              (r = 3);
                          } else if (2 === r) {
                            if (Sr(n) < 8) break;
                            const e = Er(n, 8),
                              t = new DataView(
                                e.buffer,
                                e.byteOffset,
                                e.length
                              ),
                              a = t.getUint32(0);
                            if (a > Math.pow(2, 21) - 1) {
                              s.enqueue(ir);
                              break;
                            }
                            (o = a * Math.pow(2, 32) + t.getUint32(4)), (r = 3);
                          } else {
                            if (Sr(n) < o) break;
                            const e = Er(n, o);
                            s.enqueue(yr(a ? e : xr.decode(e), t)), (r = 0);
                          }
                          if (0 === o || o > e) {
                            s.enqueue(ir);
                            break;
                          }
                        }
                      },
                    });
                  })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                  n = e.readable.pipeThrough(t).getReader(),
                  r = kr();
                r.readable.pipeTo(e.writable),
                  (this._writer = r.writable.getWriter());
                const o = () => {
                  n.read()
                    .then((e) => {
                      let { done: t, value: n } = e;
                      t || (this.onPacket(n), o());
                    })
                    .catch((e) => {});
                };
                o();
                const a = { type: "open" };
                this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                  this._writer.write(a).then(() => this.onOpen());
              });
            });
        }
        write(e) {
          this.writable = !1;
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = t === e.length - 1;
            this._writer.write(n).then(() => {
              r &&
                Cr(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          var e;
          null === (e = this._transport) || void 0 === e || e.close();
        }
      },
      polling: class extends Ur {
        constructor(e) {
          super(e);
          const t = e && e.forceBase64;
          this.supportsBinary = qr && !t;
        }
        request() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            Object.assign(e, { xd: this.xd }, this.opts),
            new Ir(Vr, this.uri(), e)
          );
        }
      },
    },
    Kr =
      /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Gr = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor",
    ];
  function Yr(e) {
    if (e.length > 8e3) throw "URI too long";
    const t = e,
      n = e.indexOf("["),
      r = e.indexOf("]");
    -1 != n &&
      -1 != r &&
      (e =
        e.substring(0, n) +
        e.substring(n, r).replace(/:/g, ";") +
        e.substring(r, e.length));
    let o = Kr.exec(e || ""),
      a = {},
      i = 14;
    for (; i--; ) a[Gr[i]] = o[i] || "";
    return (
      -1 != n &&
        -1 != r &&
        ((a.source = t),
        (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")),
        (a.authority = a.authority
          .replace("[", "")
          .replace("]", "")
          .replace(/;/g, ":")),
        (a.ipv6uri = !0)),
      (a.pathNames = (function (e, t) {
        const n = /\/{2,9}/g,
          r = t.replace(n, "/").split("/");
        ("/" != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1);
        "/" == t.slice(-1) && r.splice(r.length - 1, 1);
        return r;
      })(0, a.path)),
      (a.queryKey = (function (e, t) {
        const n = {};
        return (
          t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
            t && (n[t] = r);
          }),
          n
        );
      })(0, a.query)),
      a
    );
  }
  const Jr =
      "function" === typeof addEventListener &&
      "function" === typeof removeEventListener,
    Xr = [];
  Jr &&
    addEventListener(
      "offline",
      () => {
        Xr.forEach((e) => e());
      },
      !1
    );
  class Zr extends _r {
    constructor(e, t) {
      if (
        (super(),
        (this.binaryType = "arraybuffer"),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0),
        (this._pingInterval = -1),
        (this._pingTimeout = -1),
        (this._maxPayload = -1),
        (this._pingTimeoutTime = 1 / 0),
        e && "object" === typeof e && ((t = e), (e = null)),
        e)
      ) {
        const n = Yr(e);
        (t.hostname = n.host),
          (t.secure = "https" === n.protocol || "wss" === n.protocol),
          (t.port = n.port),
          n.query && (t.query = n.query);
      } else t.host && (t.hostname = Yr(t.host).host);
      Pr(this, t),
        (this.secure =
          null != t.secure
            ? t.secure
            : "undefined" !== typeof location &&
              "https:" === location.protocol),
        t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
        (this.hostname =
          t.hostname ||
          ("undefined" !== typeof location ? location.hostname : "localhost")),
        (this.port =
          t.port ||
          ("undefined" !== typeof location && location.port
            ? location.port
            : this.secure
            ? "443"
            : "80")),
        (this.transports = []),
        (this._transportsByName = {}),
        t.transports.forEach((e) => {
          const t = e.prototype.name;
          this.transports.push(t), (this._transportsByName[t] = e);
        }),
        (this.opts = Object.assign(
          {
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !1,
          },
          t
        )),
        (this.opts.path =
          this.opts.path.replace(/\/$/, "") +
          (this.opts.addTrailingSlash ? "/" : "")),
        "string" === typeof this.opts.query &&
          (this.opts.query = (function (e) {
            let t = {},
              n = e.split("&");
            for (let r = 0, o = n.length; r < o; r++) {
              let e = n[r].split("=");
              t[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
            }
            return t;
          })(this.opts.query)),
        Jr &&
          (this.opts.closeOnBeforeunload &&
            ((this._beforeunloadEventListener = () => {
              this.transport &&
                (this.transport.removeAllListeners(), this.transport.close());
            }),
            addEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            )),
          "localhost" !== this.hostname &&
            ((this._offlineEventListener = () => {
              this._onClose("transport close", {
                description: "network connection lost",
              });
            }),
            Xr.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open();
    }
    createTransport(e) {
      const t = Object.assign({}, this.opts.query);
      (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
      const n = Object.assign(
        {},
        this.opts,
        {
          query: t,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port,
        },
        this.opts.transportOptions[e]
      );
      return new this._transportsByName[e](n);
    }
    _open() {
      if (0 === this.transports.length)
        return void this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
      const e =
        this.opts.rememberUpgrade &&
        Zr.priorWebsocketSuccess &&
        -1 !== this.transports.indexOf("websocket")
          ? "websocket"
          : this.transports[0];
      this.readyState = "opening";
      const t = this.createTransport(e);
      t.open(), this.setTransport(t);
    }
    setTransport(e) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = e),
        e
          .on("drain", this._onDrain.bind(this))
          .on("packet", this._onPacket.bind(this))
          .on("error", this._onError.bind(this))
          .on("close", (e) => this._onClose("transport close", e));
    }
    onOpen() {
      (this.readyState = "open"),
        (Zr.priorWebsocketSuccess = "websocket" === this.transport.name),
        this.emitReserved("open"),
        this.flush();
    }
    _onPacket(e) {
      if (
        "opening" === this.readyState ||
        "open" === this.readyState ||
        "closing" === this.readyState
      )
        switch (
          (this.emitReserved("packet", e),
          this.emitReserved("heartbeat"),
          e.type)
        ) {
          case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
          case "ping":
            this._sendPacket("pong"),
              this.emitReserved("ping"),
              this.emitReserved("pong"),
              this._resetPingTimeout();
            break;
          case "error":
            const t = new Error("server error");
            (t.code = e.data), this._onError(t);
            break;
          case "message":
            this.emitReserved("data", e.data),
              this.emitReserved("message", e.data);
        }
    }
    onHandshake(e) {
      this.emitReserved("handshake", e),
        (this.id = e.sid),
        (this.transport.query.sid = e.sid),
        (this._pingInterval = e.pingInterval),
        (this._pingTimeout = e.pingTimeout),
        (this._maxPayload = e.maxPayload),
        this.onOpen(),
        "closed" !== this.readyState && this._resetPingTimeout();
    }
    _resetPingTimeout() {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      const e = this._pingInterval + this._pingTimeout;
      (this._pingTimeoutTime = Date.now() + e),
        (this._pingTimeoutTimer = this.setTimeoutFn(() => {
          this._onClose("ping timeout");
        }, e)),
        this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen),
        (this._prevBufferLen = 0),
        0 === this.writeBuffer.length
          ? this.emitReserved("drain")
          : this.flush();
    }
    flush() {
      if (
        "closed" !== this.readyState &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length
      ) {
        const e = this._getWritablePackets();
        this.transport.send(e),
          (this._prevBufferLen = e.length),
          this.emitReserved("flush");
      }
    }
    _getWritablePackets() {
      if (
        !(
          this._maxPayload &&
          "polling" === this.transport.name &&
          this.writeBuffer.length > 1
        )
      )
        return this.writeBuffer;
      let e = 1;
      for (let n = 0; n < this.writeBuffer.length; n++) {
        const r = this.writeBuffer[n].data;
        if (
          (r &&
            (e +=
              "string" === typeof (t = r)
                ? (function (e) {
                    let t = 0,
                      n = 0;
                    for (let r = 0, o = e.length; r < o; r++)
                      (t = e.charCodeAt(r)),
                        t < 128
                          ? (n += 1)
                          : t < 2048
                          ? (n += 2)
                          : t < 55296 || t >= 57344
                          ? (n += 3)
                          : (r++, (n += 4));
                    return n;
                  })(t)
                : Math.ceil(1.33 * (t.byteLength || t.size))),
          n > 0 && e > this._maxPayload)
        )
          return this.writeBuffer.slice(0, n);
        e += 2;
      }
      var t;
      return this.writeBuffer;
    }
    _hasPingExpired() {
      if (!this._pingTimeoutTime) return !0;
      const e = Date.now() > this._pingTimeoutTime;
      return (
        e &&
          ((this._pingTimeoutTime = 0),
          Cr(() => {
            this._onClose("ping timeout");
          }, this.setTimeoutFn)),
        e
      );
    }
    write(e, t, n) {
      return this._sendPacket("message", e, t, n), this;
    }
    send(e, t, n) {
      return this._sendPacket("message", e, t, n), this;
    }
    _sendPacket(e, t, n, r) {
      if (
        ("function" === typeof t && ((r = t), (t = void 0)),
        "function" === typeof n && ((r = n), (n = null)),
        "closing" === this.readyState || "closed" === this.readyState)
      )
        return;
      (n = n || {}).compress = !1 !== n.compress;
      const o = { type: e, data: t, options: n };
      this.emitReserved("packetCreate", o),
        this.writeBuffer.push(o),
        r && this.once("flush", r),
        this.flush();
    }
    close() {
      const e = () => {
          this._onClose("forced close"), this.transport.close();
        },
        t = () => {
          this.off("upgrade", t), this.off("upgradeError", t), e();
        },
        n = () => {
          this.once("upgrade", t), this.once("upgradeError", t);
        };
      return (
        ("opening" !== this.readyState && "open" !== this.readyState) ||
          ((this.readyState = "closing"),
          this.writeBuffer.length
            ? this.once("drain", () => {
                this.upgrading ? n() : e();
              })
            : this.upgrading
            ? n()
            : e()),
        this
      );
    }
    _onError(e) {
      if (
        ((Zr.priorWebsocketSuccess = !1),
        this.opts.tryAllTransports &&
          this.transports.length > 1 &&
          "opening" === this.readyState)
      )
        return this.transports.shift(), this._open();
      this.emitReserved("error", e), this._onClose("transport error", e);
    }
    _onClose(e, t) {
      if (
        "opening" === this.readyState ||
        "open" === this.readyState ||
        "closing" === this.readyState
      ) {
        if (
          (this.clearTimeoutFn(this._pingTimeoutTimer),
          this.transport.removeAllListeners("close"),
          this.transport.close(),
          this.transport.removeAllListeners(),
          Jr &&
            (this._beforeunloadEventListener &&
              removeEventListener(
                "beforeunload",
                this._beforeunloadEventListener,
                !1
              ),
            this._offlineEventListener))
        ) {
          const e = Xr.indexOf(this._offlineEventListener);
          -1 !== e && Xr.splice(e, 1);
        }
        (this.readyState = "closed"),
          (this.id = null),
          this.emitReserved("close", e, t),
          (this.writeBuffer = []),
          (this._prevBufferLen = 0);
      }
    }
  }
  Zr.protocol = 4;
  class eo extends Zr {
    constructor() {
      super(...arguments), (this._upgrades = []);
    }
    onOpen() {
      if ((super.onOpen(), "open" === this.readyState && this.opts.upgrade))
        for (let e = 0; e < this._upgrades.length; e++)
          this._probe(this._upgrades[e]);
    }
    _probe(e) {
      let t = this.createTransport(e),
        n = !1;
      Zr.priorWebsocketSuccess = !1;
      const r = () => {
        n ||
          (t.send([{ type: "ping", data: "probe" }]),
          t.once("packet", (e) => {
            if (!n)
              if ("pong" === e.type && "probe" === e.data) {
                if (
                  ((this.upgrading = !0), this.emitReserved("upgrading", t), !t)
                )
                  return;
                (Zr.priorWebsocketSuccess = "websocket" === t.name),
                  this.transport.pause(() => {
                    n ||
                      ("closed" !== this.readyState &&
                        (u(),
                        this.setTransport(t),
                        t.send([{ type: "upgrade" }]),
                        this.emitReserved("upgrade", t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                const e = new Error("probe error");
                (e.transport = t.name), this.emitReserved("upgradeError", e);
              }
          }));
      };
      function o() {
        n || ((n = !0), u(), t.close(), (t = null));
      }
      const a = (e) => {
        const n = new Error("probe error: " + e);
        (n.transport = t.name), o(), this.emitReserved("upgradeError", n);
      };
      function i() {
        a("transport closed");
      }
      function s() {
        a("socket closed");
      }
      function l(e) {
        t && e.name !== t.name && o();
      }
      const u = () => {
        t.removeListener("open", r),
          t.removeListener("error", a),
          t.removeListener("close", i),
          this.off("close", s),
          this.off("upgrading", l);
      };
      t.once("open", r),
        t.once("error", a),
        t.once("close", i),
        this.once("close", s),
        this.once("upgrading", l),
        -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== e
          ? this.setTimeoutFn(() => {
              n || t.open();
            }, 200)
          : t.open();
    }
    onHandshake(e) {
      (this._upgrades = this._filterUpgrades(e.upgrades)), super.onHandshake(e);
    }
    _filterUpgrades(e) {
      const t = [];
      for (let n = 0; n < e.length; n++)
        ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  }
  class to extends eo {
    constructor(e) {
      const t =
        "object" === typeof e
          ? e
          : arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : {};
      (!t.transports ||
        (t.transports && "string" === typeof t.transports[0])) &&
        (t.transports = (
          t.transports || ["polling", "websocket", "webtransport"]
        )
          .map((e) => Qr[e])
          .filter((e) => !!e)),
        super(e, t);
    }
  }
  const no = "function" === typeof ArrayBuffer,
    ro = Object.prototype.toString,
    oo =
      "function" === typeof Blob ||
      ("undefined" !== typeof Blob &&
        "[object BlobConstructor]" === ro.call(Blob)),
    ao =
      "function" === typeof File ||
      ("undefined" !== typeof File &&
        "[object FileConstructor]" === ro.call(File));
  function io(e) {
    return (
      (no &&
        (e instanceof ArrayBuffer ||
          ((e) =>
            "function" === typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e.buffer instanceof ArrayBuffer)(e))) ||
      (oo && e instanceof Blob) ||
      (ao && e instanceof File)
    );
  }
  function so(e, t) {
    if (!e || "object" !== typeof e) return !1;
    if (Array.isArray(e)) {
      for (let t = 0, n = e.length; t < n; t++) if (so(e[t])) return !0;
      return !1;
    }
    if (io(e)) return !0;
    if (e.toJSON && "function" === typeof e.toJSON && 1 === arguments.length)
      return so(e.toJSON(), !0);
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && so(e[n])) return !0;
    return !1;
  }
  function lo(e) {
    const t = [],
      n = e.data,
      r = e;
    return (
      (r.data = uo(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
    );
  }
  function uo(e, t) {
    if (!e) return e;
    if (io(e)) {
      const n = { _placeholder: !0, num: t.length };
      return t.push(e), n;
    }
    if (Array.isArray(e)) {
      const n = new Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = uo(e[r], t);
      return n;
    }
    if ("object" === typeof e && !(e instanceof Date)) {
      const n = {};
      for (const r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = uo(e[r], t));
      return n;
    }
    return e;
  }
  function co(e, t) {
    return (e.data = fo(e.data, t)), delete e.attachments, e;
  }
  function fo(e, t) {
    if (!e) return e;
    if (e && !0 === e._placeholder) {
      if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
        return t[e.num];
      throw new Error("illegal attachments");
    }
    if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = fo(e[n], t);
    else if ("object" === typeof e)
      for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (e[n] = fo(e[n], t));
    return e;
  }
  const po = [
      "connect",
      "connect_error",
      "disconnect",
      "disconnecting",
      "newListener",
      "removeListener",
    ],
    ho = 5;
  var mo;
  !(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
      (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
      (e[(e.EVENT = 2)] = "EVENT"),
      (e[(e.ACK = 3)] = "ACK"),
      (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
      (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
      (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
  })(mo || (mo = {}));
  class go {
    constructor(e) {
      this.replacer = e;
    }
    encode(e) {
      return (e.type !== mo.EVENT && e.type !== mo.ACK) || !so(e)
        ? [this.encodeAsString(e)]
        : this.encodeAsBinary({
            type: e.type === mo.EVENT ? mo.BINARY_EVENT : mo.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id,
          });
    }
    encodeAsString(e) {
      let t = "" + e.type;
      return (
        (e.type !== mo.BINARY_EVENT && e.type !== mo.BINARY_ACK) ||
          (t += e.attachments + "-"),
        e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
        null != e.id && (t += e.id),
        null != e.data && (t += JSON.stringify(e.data, this.replacer)),
        t
      );
    }
    encodeAsBinary(e) {
      const t = lo(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return r.unshift(n), r;
    }
  }
  function yo(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  class vo extends _r {
    constructor(e) {
      super(), (this.reviver = e);
    }
    add(e) {
      let t;
      if ("string" === typeof e) {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        t = this.decodeString(e);
        const n = t.type === mo.BINARY_EVENT;
        n || t.type === mo.BINARY_ACK
          ? ((t.type = n ? mo.EVENT : mo.ACK),
            (this.reconstructor = new bo(t)),
            0 === t.attachments && super.emitReserved("decoded", t))
          : super.emitReserved("decoded", t);
      } else {
        if (!io(e) && !e.base64) throw new Error("Unknown type: " + e);
        if (!this.reconstructor)
          throw new Error("got binary data when not reconstructing a packet");
        (t = this.reconstructor.takeBinaryData(e)),
          t && ((this.reconstructor = null), super.emitReserved("decoded", t));
      }
    }
    decodeString(e) {
      let t = 0;
      const n = { type: Number(e.charAt(0)) };
      if (void 0 === mo[n.type])
        throw new Error("unknown packet type " + n.type);
      if (n.type === mo.BINARY_EVENT || n.type === mo.BINARY_ACK) {
        const r = t + 1;
        for (; "-" !== e.charAt(++t) && t != e.length; );
        const o = e.substring(r, t);
        if (o != Number(o) || "-" !== e.charAt(t))
          throw new Error("Illegal attachments");
        n.attachments = Number(o);
      }
      if ("/" === e.charAt(t + 1)) {
        const r = t + 1;
        for (; ++t; ) {
          if ("," === e.charAt(t)) break;
          if (t === e.length) break;
        }
        n.nsp = e.substring(r, t);
      } else n.nsp = "/";
      const r = e.charAt(t + 1);
      if ("" !== r && Number(r) == r) {
        const r = t + 1;
        for (; ++t; ) {
          const n = e.charAt(t);
          if (null == n || Number(n) != n) {
            --t;
            break;
          }
          if (t === e.length) break;
        }
        n.id = Number(e.substring(r, t + 1));
      }
      if (e.charAt(++t)) {
        const r = this.tryParse(e.substr(t));
        if (!vo.isPayloadValid(n.type, r)) throw new Error("invalid payload");
        n.data = r;
      }
      return n;
    }
    tryParse(e) {
      try {
        return JSON.parse(e, this.reviver);
      } catch (Jo) {
        return !1;
      }
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case mo.CONNECT:
          return yo(t);
        case mo.DISCONNECT:
          return void 0 === t;
        case mo.CONNECT_ERROR:
          return "string" === typeof t || yo(t);
        case mo.EVENT:
        case mo.BINARY_EVENT:
          return (
            Array.isArray(t) &&
            ("number" === typeof t[0] ||
              ("string" === typeof t[0] && -1 === po.indexOf(t[0])))
          );
        case mo.ACK:
        case mo.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor &&
        (this.reconstructor.finishedReconstruction(),
        (this.reconstructor = null));
    }
  }
  class bo {
    constructor(e) {
      (this.packet = e), (this.buffers = []), (this.reconPack = e);
    }
    takeBinaryData(e) {
      if (
        (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments)
      ) {
        const e = co(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  }
  function wo(e, t, n) {
    return (
      e.on(t, n),
      function () {
        e.off(t, n);
      }
    );
  }
  const ko = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  });
  class xo extends _r {
    constructor(e, t, n) {
      super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        (this._opts = Object.assign({}, n)),
        this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      const e = this.io;
      this.subs = [
        wo(e, "open", this.onopen.bind(this)),
        wo(e, "packet", this.onpacket.bind(this)),
        wo(e, "error", this.onerror.bind(this)),
        wo(e, "close", this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return (
        this.connected ||
          (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          "open" === this.io._readyState && this.onopen()),
        this
      );
    }
    open() {
      return this.connect();
    }
    send() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(e) {
      var t, n, r;
      if (ko.hasOwnProperty(e))
        throw new Error('"' + e.toString() + '" is a reserved event name');
      for (
        var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
        i < o;
        i++
      )
        a[i - 1] = arguments[i];
      if (
        (a.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return this._addToQueue(a), this;
      const s = { type: mo.EVENT, data: a, options: {} };
      if (
        ((s.options.compress = !1 !== this.flags.compress),
        "function" === typeof a[a.length - 1])
      ) {
        const e = this.ids++,
          t = a.pop();
        this._registerAckCallback(e, t), (s.id = e);
      }
      const l =
          null ===
            (n =
              null === (t = this.io.engine) || void 0 === t
                ? void 0
                : t.transport) || void 0 === n
            ? void 0
            : n.writable,
        u =
          this.connected &&
          !(null === (r = this.io.engine) || void 0 === r
            ? void 0
            : r._hasPingExpired());
      return (
        (this.flags.volatile && !l) ||
          (u
            ? (this.notifyOutgoingListeners(s), this.packet(s))
            : this.sendBuffer.push(s)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(e, t) {
      var n,
        r = this;
      const o =
        null !== (n = this.flags.timeout) && void 0 !== n
          ? n
          : this._opts.ackTimeout;
      if (void 0 === o) return void (this.acks[e] = t);
      const a = this.io.setTimeoutFn(() => {
          delete this.acks[e];
          for (let t = 0; t < this.sendBuffer.length; t++)
            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
          t.call(this, new Error("operation has timed out"));
        }, o),
        i = function () {
          r.io.clearTimeoutFn(a);
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
            n[o] = arguments[o];
          t.apply(r, n);
        };
      (i.withError = !0), (this.acks[e] = i);
    }
    emitWithAck(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return new Promise((t, r) => {
        const o = (e, n) => (e ? r(e) : t(n));
        (o.withError = !0), n.push(o), this.emit(e, ...n);
      });
    }
    _addToQueue(e) {
      var t = this;
      let n;
      "function" === typeof e[e.length - 1] && (n = e.pop());
      const r = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: e,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      e.push(function (e) {
        if (r !== t._queue[0]) return;
        if (null !== e)
          r.tryCount > t._opts.retries && (t._queue.shift(), n && n(e));
        else if ((t._queue.shift(), n)) {
          for (
            var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          n(null, ...a);
        }
        return (r.pending = !1), t._drainQueue();
      }),
        this._queue.push(r),
        this._drainQueue();
    }
    _drainQueue() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!this.connected || 0 === this._queue.length) return;
      const t = this._queue[0];
      (t.pending && !e) ||
        ((t.pending = !0),
        t.tryCount++,
        (this.flags = t.flags),
        this.emit.apply(this, t.args));
    }
    packet(e) {
      (e.nsp = this.nsp), this.io._packet(e);
    }
    onopen() {
      "function" == typeof this.auth
        ? this.auth((e) => {
            this._sendConnectPacket(e);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
      this.packet({
        type: mo.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
          : e,
      });
    }
    onerror(e) {
      this.connected || this.emitReserved("connect_error", e);
    }
    onclose(e, t) {
      (this.connected = !1),
        delete this.id,
        this.emitReserved("disconnect", e, t),
        this._clearAcks();
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((e) => {
        if (!this.sendBuffer.some((t) => String(t.id) === e)) {
          const t = this.acks[e];
          delete this.acks[e],
            t.withError &&
              t.call(this, new Error("socket has been disconnected"));
        }
      });
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case mo.CONNECT:
            e.data && e.data.sid
              ? this.onconnect(e.data.sid, e.data.pid)
              : this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
            break;
          case mo.EVENT:
          case mo.BINARY_EVENT:
            this.onevent(e);
            break;
          case mo.ACK:
          case mo.BINARY_ACK:
            this.onack(e);
            break;
          case mo.DISCONNECT:
            this.ondisconnect();
            break;
          case mo.CONNECT_ERROR:
            this.destroy();
            const t = new Error(e.data.message);
            (t.data = e.data.data), this.emitReserved("connect_error", t);
        }
    }
    onevent(e) {
      const t = e.data || [];
      null != e.id && t.push(this.ack(e.id)),
        this.connected
          ? this.emitEvent(t)
          : this.receiveBuffer.push(Object.freeze(t));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        const t = this._anyListeners.slice();
        for (const n of t) n.apply(this, e);
      }
      super.emit.apply(this, e),
        this._pid &&
          e.length &&
          "string" === typeof e[e.length - 1] &&
          (this._lastOffset = e[e.length - 1]);
    }
    ack(e) {
      const t = this;
      let n = !1;
      return function () {
        if (!n) {
          n = !0;
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          t.packet({ type: mo.ACK, id: e, data: o });
        }
      };
    }
    onack(e) {
      const t = this.acks[e.id];
      "function" === typeof t &&
        (delete this.acks[e.id],
        t.withError && e.data.unshift(null),
        t.apply(this, e.data));
    }
    onconnect(e, t) {
      (this.id = e),
        (this.recovered = t && this._pid === t),
        (this._pid = t),
        (this.connected = !0),
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((e) => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((e) => {
          this.notifyOutgoingListeners(e), this.packet(e);
        }),
        (this.sendBuffer = []);
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
        this.io._destroy(this);
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: mo.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return (this.flags.compress = e), this;
    }
    get volatile() {
      return (this.flags.volatile = !0), this;
    }
    timeout(e) {
      return (this.flags.timeout = e), this;
    }
    onAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(e),
        this
      );
    }
    prependAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(e),
        this
      );
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        const t = this._anyListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return t.splice(n, 1), this;
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(e),
        this
      );
    }
    prependAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(e),
        this
      );
    }
    offAnyOutgoing(e) {
      if (!this._anyOutgoingListeners) return this;
      if (e) {
        const t = this._anyOutgoingListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return t.splice(n, 1), this;
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const t = this._anyOutgoingListeners.slice();
        for (const n of t) n.apply(this, e.data);
      }
    }
  }
  function So(e) {
    (e = e || {}),
      (this.ms = e.min || 100),
      (this.max = e.max || 1e4),
      (this.factor = e.factor || 2),
      (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
      (this.attempts = 0);
  }
  (So.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var t = Math.random(),
        n = Math.floor(t * this.jitter * e);
      e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
    }
    return 0 | Math.min(e, this.max);
  }),
    (So.prototype.reset = function () {
      this.attempts = 0;
    }),
    (So.prototype.setMin = function (e) {
      this.ms = e;
    }),
    (So.prototype.setMax = function (e) {
      this.max = e;
    }),
    (So.prototype.setJitter = function (e) {
      this.jitter = e;
    });
  class Eo extends _r {
    constructor(e, t) {
      var n;
      super(),
        (this.nsps = {}),
        (this.subs = []),
        e && "object" === typeof e && ((t = e), (e = void 0)),
        ((t = t || {}).path = t.path || "/socket.io"),
        (this.opts = t),
        Pr(this, t),
        this.reconnection(!1 !== t.reconnection),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(
          null !== (n = t.randomizationFactor) && void 0 !== n ? n : 0.5
        ),
        (this.backoff = new So({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(null == t.timeout ? 2e4 : t.timeout),
        (this._readyState = "closed"),
        (this.uri = e);
      const r = t.parser || o;
      (this.encoder = new r.Encoder()),
        (this.decoder = new r.Decoder()),
        (this._autoConnect = !1 !== t.autoConnect),
        this._autoConnect && this.open();
    }
    reconnection(e) {
      return arguments.length
        ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(e) {
      return void 0 === e
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e),
          null === (t = this.backoff) || void 0 === t || t.setMin(e),
          this);
    }
    randomizationFactor(e) {
      var t;
      return void 0 === e
        ? this._randomizationFactor
        : ((this._randomizationFactor = e),
          null === (t = this.backoff) || void 0 === t || t.setJitter(e),
          this);
    }
    reconnectionDelayMax(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e),
          null === (t = this.backoff) || void 0 === t || t.setMax(e),
          this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        0 === this.backoff.attempts &&
        this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new to(this.uri, this.opts);
      const t = this.engine,
        n = this;
      (this._readyState = "opening"), (this.skipReconnect = !1);
      const r = wo(t, "open", function () {
          n.onopen(), e && e();
        }),
        o = (t) => {
          this.cleanup(),
            (this._readyState = "closed"),
            this.emitReserved("error", t),
            e ? e(t) : this.maybeReconnectOnOpen();
        },
        a = wo(t, "error", o);
      if (!1 !== this._timeout) {
        const e = this._timeout,
          n = this.setTimeoutFn(() => {
            r(), o(new Error("timeout")), t.close();
          }, e);
        this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          });
      }
      return this.subs.push(r), this.subs.push(a), this;
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
      const e = this.engine;
      this.subs.push(
        wo(e, "ping", this.onping.bind(this)),
        wo(e, "data", this.ondata.bind(this)),
        wo(e, "error", this.onerror.bind(this)),
        wo(e, "close", this.onclose.bind(this)),
        wo(this.decoder, "decoded", this.ondecoded.bind(this))
      );
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(e) {
      try {
        this.decoder.add(e);
      } catch (Jo) {
        this.onclose("parse error", Jo);
      }
    }
    ondecoded(e) {
      Cr(() => {
        this.emitReserved("packet", e);
      }, this.setTimeoutFn);
    }
    onerror(e) {
      this.emitReserved("error", e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return (
        n
          ? this._autoConnect && !n.active && n.connect()
          : ((n = new xo(this, e, t)), (this.nsps[e] = n)),
        n
      );
    }
    _destroy(e) {
      const t = Object.keys(this.nsps);
      for (const n of t) {
        if (this.nsps[n].active) return;
      }
      this._close();
    }
    _packet(e) {
      const t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      this.subs.forEach((e) => e()),
        (this.subs.length = 0),
        this.decoder.destroy();
    }
    _close() {
      (this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose("forced close");
    }
    disconnect() {
      return this._close();
    }
    onclose(e, t) {
      var n;
      this.cleanup(),
        null === (n = this.engine) || void 0 === n || n.close(),
        this.backoff.reset(),
        (this._readyState = "closed"),
        this.emitReserved("close", e, t),
        this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(),
          this.emitReserved("reconnect_failed"),
          (this._reconnecting = !1);
      else {
        const t = this.backoff.duration();
        this._reconnecting = !0;
        const n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved("reconnect_attempt", e.backoff.attempts),
            e.skipReconnect ||
              e.open((t) => {
                t
                  ? ((e._reconnecting = !1),
                    e.reconnect(),
                    this.emitReserved("reconnect_error", t))
                  : e.onreconnect();
              }));
        }, t);
        this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          });
      }
    }
    onreconnect() {
      const e = this.backoff.attempts;
      (this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved("reconnect", e);
    }
  }
  const _o = {};
  function Co(e, t) {
    "object" === typeof e && ((t = e), (e = void 0));
    const n = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = e;
        (n = n || ("undefined" !== typeof location && location)),
          null == e && (e = n.protocol + "//" + n.host),
          "string" === typeof e &&
            ("/" === e.charAt(0) &&
              (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
            /^(https?|wss?):\/\//.test(e) ||
              (e =
                "undefined" !== typeof n
                  ? n.protocol + "//" + e
                  : "https://" + e),
            (r = Yr(e))),
          r.port ||
            (/^(http|ws)$/.test(r.protocol)
              ? (r.port = "80")
              : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
          (r.path = r.path || "/");
        const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
        return (
          (r.id = r.protocol + "://" + o + ":" + r.port + t),
          (r.href =
            r.protocol +
            "://" +
            o +
            (n && n.port === r.port ? "" : ":" + r.port)),
          r
        );
      })(e, (t = t || {}).path || "/socket.io"),
      r = n.source,
      o = n.id,
      a = n.path,
      i = _o[o] && a in _o[o].nsps;
    let s;
    return (
      t.forceNew || t["force new connection"] || !1 === t.multiplex || i
        ? (s = new Eo(r, t))
        : (_o[o] || (_o[o] = new Eo(r, t)), (s = _o[o])),
      n.query && !t.query && (t.query = n.queryKey),
      s.socket(n.path, t)
    );
  }
  Object.assign(Co, { Manager: Eo, Socket: xo, io: Co, connect: Co });
  const No = Co("https://vibely-chat-app-ytuu.onrender.com/auth"),
    Oo = (e) => {
      let { users: t, onSubmit: n, onClose: r } = e;
      const [o, a] = (0, i.useState)(""),
        [s, l] = (0, i.useState)(""),
        [u, c] = (0, i.useState)([]),
        [d, f] = (0, i.useState)(!1),
        { fetchUserGroups: p } = Xn(),
        h = t.filter((e) => e.username.toLowerCase().includes(s.toLowerCase())),
        m = (e) => {
          u.includes(e._id)
            ? c(u.filter((t) => t !== e._id))
            : c([...u, e._id]);
        };
      return (
        (0, i.useEffect)(
          () => (
            No.on("receiveGroupMessage", (e) => {}),
            () => {
              No.off("receiveGroupMessage");
            }
          ),
          []
        ),
        (0, Yn.jsxs)("form", {
          onSubmit: (e) => {
            e.preventDefault(),
              o && 0 !== u.length
                ? (async (e, t) => {
                    f(!0);
                    try {
                      const r = await Gn.post(
                        "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/createGroup",
                        { groupName: e, members: t },
                        {
                          headers: { "Content-Type": "application/json" },
                          withCredentials: !0,
                        }
                      );
                      r.data.success
                        ? (n(r.data), p())
                        : console.error(
                            "Failed to create group:",
                            r.data.message
                          );
                    } catch (r) {
                      console.error("Error while creating group:", r);
                    } finally {
                      f(!1);
                    }
                  })(o, u)
                : alert("Please provide a group name and select users");
          },
          className: "bg-zinc-900 p-4 rounded-lg shadow-lg",
          children: [
            (0, Yn.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, Yn.jsx)("label", {
                  className: "block text-white text-lg font-semibold mb-2",
                  children: "Group Name:",
                }),
                (0, Yn.jsx)("input", {
                  type: "text",
                  value: o,
                  onChange: (e) => a(e.target.value),
                  className:
                    "w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md",
                  placeholder: "Enter group name",
                  required: !0,
                }),
              ],
            }),
            (0, Yn.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, Yn.jsx)("label", {
                  className: "block text-white text-lg font-semibold mb-2",
                  children: "Search Users:",
                }),
                (0, Yn.jsx)("input", {
                  type: "text",
                  value: s,
                  onChange: (e) => l(e.target.value),
                  className:
                    "w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md",
                  placeholder: "Search by username",
                }),
              ],
            }),
            (0, Yn.jsx)("div", {
              className:
                "mb-4 h-48 overflow-y-scroll border border-gray-600 bg-zinc-800 rounded-md p-2",
              children:
                h.length > 0
                  ? h.map((e) =>
                      (0, Yn.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-2 hover:bg-zinc-700 cursor-pointer text-white",
                          onClick: () => m(e),
                          children: [
                            (0, Yn.jsx)("span", {
                              className: "text-lg",
                              children: e.username,
                            }),
                            (0, Yn.jsx)("input", {
                              type: "checkbox",
                              checked: u.includes(e._id),
                              onChange: () => m(e),
                              className: "form-checkbox h-5 w-5 text-green-500",
                            }),
                          ],
                        },
                        e._id
                      )
                    )
                  : (0, Yn.jsx)("div", {
                      className: "text-gray-400",
                      children: "No users found",
                    }),
            }),
            (0, Yn.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, Yn.jsx)("button", {
                  type: "button",
                  className:
                    "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200",
                  onClick: r,
                  children: "Cancel",
                }),
                (0, Yn.jsxs)("button", {
                  type: "submit",
                  className:
                    "bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
                  children: [d ? "Creating..." : "Create Group", " "],
                }),
              ],
            }),
          ],
        })
      );
    };
  var Ro = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    To = i.createContext && i.createContext(Ro),
    Po = ["attr", "size", "title"];
  function jo(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function Lo() {
    return (
      (Lo = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Lo.apply(this, arguments)
    );
  }
  function Ao(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function zo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Ao(Object(n), !0).forEach(function (t) {
            Do(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ao(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Do(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Fo(e) {
    return (
      e &&
      e.map((e, t) =>
        i.createElement(e.tag, zo({ key: t }, e.attr), Fo(e.child))
      )
    );
  }
  function Bo(e) {
    return (t) =>
      i.createElement(Uo, Lo({ attr: zo({}, e.attr) }, t), Fo(e.child));
  }
  function Uo(e) {
    var t = (t) => {
      var n,
        { attr: r, size: o, title: a } = e,
        s = jo(e, Po),
        l = o || t.size || "1em";
      return (
        t.className && (n = t.className),
        e.className && (n = (n ? n + " " : "") + e.className),
        i.createElement(
          "svg",
          Lo(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            t.attr,
            r,
            s,
            {
              className: n,
              style: zo(zo({ color: e.color || t.color }, t.style), e.style),
              height: l,
              width: l,
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          a && i.createElement("title", null, a),
          e.children
        )
      );
    };
    return void 0 !== To
      ? i.createElement(To.Consumer, null, (e) => t(e))
      : t(Ro);
  }
  function Io(e) {
    return Bo({
      tag: "svg",
      attr: { viewBox: "0 0 640 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Mo(e) {
    return Bo({
      tag: "svg",
      attr: { viewBox: "0 0 640 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function qo(e) {
    return Bo({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160 80-80-80-80m-192 80h256",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Vo(e) {
    return Bo({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const Ho = Co("https://vibely-chat-app-ytuu.onrender.com/auth"),
    Wo = (e) => {
      let { currentChat: t } = e;
      const [n, r] = (0, i.useState)(""),
        [o, a] = (0, i.useState)([]),
        { userId: s } = Xn(),
        l = (0, i.useRef)(null);
      (0, i.useEffect)(() => {
        if (t && s) {
          if ((a([]), t.isGroupChat))
            Ho.emit("joinGroupChat", { groupId: t._id, userId: s }),
              Ho.on("receiveGroupMessage", (e) => {
                a((t) => [...t, e]);
              }),
              Ho.on("loadGroupChatHistory", (e) => {
                a(e);
              });
          else {
            const e = t._id !== s ? t._id : null;
            e
              ? (Ho.emit("joinPrivateChat", { userId1: s, userId2: e }),
                Ho.on("receiveMessage", (e) => {
                  a((t) => [...t, e]);
                }),
                Ho.on("loadChatHistory", (e) => {
                  a(e);
                }))
              : console.error("No valid other user found in the chat");
          }
          Ho.on("error", (e) => {
            console.error("Socket error:", e);
          });
        } else console.error("No current chat or user ID found");
        return () => {
          Ho.off("receiveMessage"),
            Ho.off("loadChatHistory"),
            Ho.off("receiveGroupMessage"),
            Ho.off("loadGroupChatHistory"),
            Ho.off("error");
        };
      }, [t, s]);
      (0, i.useEffect)(() => {
        (() => {
          var e;
          null === (e = l.current) ||
            void 0 === e ||
            e.scrollIntoView({ behavior: "smooth" });
        })();
      }, [o]);
      return (0, Yn.jsxs)("div", {
        className:
          "flex flex-col h-full bg-gray-800 rounded-lg shadow-lg overflow-hidden",
        children: [
          (0, Yn.jsxs)("div", {
            className: "flex-1 overflow-y-auto p-4",
            children: [
              o.map((e) => {
                return (0, Yn.jsx)(
                  "div",
                  {
                    className:
                      "my-2 flex " +
                      (e.senderId === s ? "justify-end" : "justify-start"),
                    children: (0, Yn.jsxs)("div", {
                      className:
                        "inline-block p-3 rounded-lg shadow-md transition duration-300 ease-in-out " +
                        (e.senderId === s
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300"),
                      children: [
                        t.isGroupChat &&
                          (0, Yn.jsx)("div", {
                            className: "font-bold text-sm text-gray-400 mb-1",
                            children: e.senderId === s ? "You" : e.username,
                          }),
                        e.messageContent,
                        (0, Yn.jsx)("small", {
                          className:
                            "text-gray-400 text-sm mt-1 ml-2 " +
                            (e.senderId === s ? "text-right" : "text-left"),
                          children:
                            ((n = e.timestamp),
                            new Date(n).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: !0,
                            })),
                        }),
                      ],
                    }),
                  },
                  e.timestamp
                );
                var n;
              }),
              (0, Yn.jsx)("div", { ref: l }),
            ],
          }),
          (0, Yn.jsxs)("form", {
            onSubmit: (e) => {
              if ((e.preventDefault(), n.trim())) {
                const e = {
                  senderId: s,
                  messageContent: n,
                  timestamp: new Date().toISOString(),
                  status: "sent",
                };
                t.isGroupChat
                  ? ((e.groupId = t._id),
                    Ho.emit("sendGroupMessage", e),
                    a((t) => [...t, e]))
                  : ((e.receiverId = t._id), Ho.emit("sendPrivateMessage", e)),
                  r("");
              }
            },
            className: "flex p-2 bg-gray-800 border-t border-gray-700",
            children: [
              (0, Yn.jsx)("input", {
                type: "text",
                value: n,
                onChange: (e) => {
                  r(e.target.value);
                },
                className:
                  "flex-1 p-2 bg-gray-700 text-gray-300 border-none rounded-sm focus:outline-none",
                placeholder: "Type your message...",
              }),
              (0, Yn.jsx)("button", {
                type: "submit",
                className:
                  "bg-blue-500 text-white p-2 rounded-sm ml-2 transition duration-300 hover:bg-blue-600",
                children: (0, Yn.jsx)(Vo, {}),
              }),
            ],
          }),
        ],
      });
    },
    $o = (e) => {
      let { user: t, onClose: n } = e;
      const [r, o] = (0, i.useState)(t.username),
        { updateUser: a } = Xn();
      return (0, Yn.jsxs)("form", {
        onSubmit: async (e) => {
          if ((e.preventDefault(), r))
            try {
              await a(r), n();
            } catch (t) {
              console.error("Error updating user:", t),
                alert("Error while updating user details");
            }
          else alert("Username cannot be empty");
        },
        className: "bg-zinc-900 p-4 rounded-lg shadow-lg",
        children: [
          (0, Yn.jsxs)("div", {
            className: "mb-4",
            children: [
              (0, Yn.jsx)("label", {
                className: "block text-white text-lg font-semibold mb-2",
                children: "Username:",
              }),
              (0, Yn.jsx)("input", {
                type: "text",
                value: r,
                onChange: (e) => o(e.target.value),
                className:
                  "w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md",
                placeholder: "Enter new username",
                required: !0,
              }),
            ],
          }),
          (0, Yn.jsxs)("div", {
            className: "flex justify-between items-center",
            children: [
              (0, Yn.jsx)("button", {
                type: "submit",
                className:
                  "bg-green-500 text-white p-2 rounded hover:bg-green-600",
                children: "Save",
              }),
              (0, Yn.jsx)("button", {
                type: "button",
                onClick: n,
                className: "bg-red-500 text-white p-2 rounded hover:bg-red-600",
                children: "Cancel",
              }),
            ],
          }),
        ],
      });
    },
    Qo = () => {
      const [e, t] = (0, i.useState)(null),
        [n, r] = (0, i.useState)(!1),
        {
          userData: o,
          users: a,
          groups: s,
          loading: l,
          setIsAuthenticate: u,
        } = Xn(),
        [c, d] = (0, i.useState)(!1),
        [f, p] = (0, i.useState)(!1),
        [h, m] = (0, i.useState)(""),
        [g, y] = (0, i.useState)(!0),
        v = a
          ? a.filter((e) => e.username.toLowerCase().includes(h.toLowerCase()))
          : [],
        b = s
          ? s.filter((e) => e.groupName.toLowerCase().includes(h.toLowerCase()))
          : [];
      return l || !o || (!a && !s)
        ? (0, Yn.jsx)("div", {
            className: "flex justify-center bg-black items-center h-screen",
            children: (0, Yn.jsx)(Pe, { color: "#36D7B7" }),
          })
        : (0, Yn.jsxs)("div", {
            className: "flex flex-col md:flex-row h-screen",
            children: [
              (0, Yn.jsxs)("div", {
                className:
                  "bg-zinc-900 text-white h-screen w-full md:w-1/4 p-2 transition-all duration-300 " +
                  (n ? "hidden md:block" : "block"),
                children: [
                  (0, Yn.jsxs)("div", {
                    className: "flex items-center justify-center mb-2",
                    children: [
                      (0, Yn.jsx)("h1", {
                        className: "text-4xl text-green-400 mr-2",
                        children: "VIBELY",
                      }),
                      (0, Yn.jsx)("img", {
                        src: "/msg-gif-3-logo.gif",
                        alt: "Logo",
                        className: "w-12 h-12 ",
                      }),
                    ],
                  }),
                  (0, Yn.jsxs)("div", {
                    className: "flex flex-col mb-5",
                    children: [
                      (0, Yn.jsx)("h2", {
                        className: "text-4xl font-bold text-center",
                        children: o ? o.username : "Loading...",
                      }),
                      (0, Yn.jsxs)("div", {
                        className: "flex justify-center space-x-4 mt-4",
                        children: [
                          (0, Yn.jsxs)("button", {
                            onClick: () => d(!0),
                            className:
                              "bg-zinc-700 p-2 rounded flex items-center",
                            children: [
                              (0, Yn.jsx)(Mo, { className: "mr-2" }),
                              "New Group",
                            ],
                          }),
                          (0, Yn.jsxs)("button", {
                            onClick: () => {
                              p(!0);
                            },
                            className:
                              "bg-zinc-700 p-2 rounded flex items-center",
                            children: [
                              (0, Yn.jsx)(Io, { className: "mr-2" }),
                              "Edit",
                            ],
                          }),
                          (0, Yn.jsxs)("button", {
                            onClick: async () => {
                              try {
                                await Gn.post(
                                  "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/logout",
                                  {},
                                  { withCredentials: !0 }
                                );
                                u(!1);
                              } catch (e) {
                                console.error("Logout error:", e);
                              }
                            },
                            className:
                              "bg-zinc-700 p-2 rounded flex items-center",
                            children: [
                              (0, Yn.jsx)(qo, { className: "mr-2" }),
                              "Logout",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Yn.jsxs)("div", {
                    className: "flex justify-center mb-4",
                    children: [
                      (0, Yn.jsx)("button", {
                        onClick: () => y(!0),
                        className:
                          (g
                            ? "bg-gradient-to-r from-purple-600 to-indigo-700"
                            : "bg-gray-800") +
                          " p-2 rounded-lg w-1/2 mx-2 text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600",
                        children: "Users",
                      }),
                      (0, Yn.jsx)("button", {
                        onClick: () => y(!1),
                        className:
                          (g
                            ? "bg-gray-800"
                            : "bg-gradient-to-r from-purple-600 to-indigo-700") +
                          " p-2 rounded-lg w-1/2 mx-2 text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600",
                        children: "Groups",
                      }),
                    ],
                  }),
                  (0, Yn.jsx)("div", {
                    className: "mb-4 px-2",
                    children: (0, Yn.jsx)("input", {
                      type: "text",
                      placeholder: "Search...",
                      className:
                        "w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600",
                      value: h,
                      onChange: (e) => m(e.target.value),
                    }),
                  }),
                  g
                    ? (0, Yn.jsx)("ul", {
                        className: "space-y-2",
                        children:
                          v && v.length > 0
                            ? v.map((e) =>
                                (0, Yn.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out",
                                    onClick: () =>
                                      ((e) => {
                                        t(e), r(!0);
                                      })(e),
                                    children: [
                                      (0, Yn.jsx)("div", {
                                        className:
                                          "flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3",
                                        children: (0, Yn.jsx)("span", {
                                          className: "text-white font-bold",
                                          children: e.username
                                            .charAt(0)
                                            .toUpperCase(),
                                        }),
                                      }),
                                      (0, Yn.jsx)("span", {
                                        className: "text-white font-semibold",
                                        children: e.username,
                                      }),
                                    ],
                                  },
                                  e._id
                                )
                              )
                            : (0, Yn.jsx)("li", {
                                className: "text-gray-400",
                                children: "No users available",
                              }),
                      })
                    : (0, Yn.jsx)("ul", {
                        className: "space-y-2",
                        children:
                          b && b.length > 0
                            ? b.map((e) =>
                                (0, Yn.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out",
                                    onClick: () =>
                                      ((e) => {
                                        t(e), r(!0);
                                      })(e),
                                    children: [
                                      (0, Yn.jsx)("div", {
                                        className:
                                          "flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3",
                                        children: (0, Yn.jsx)("span", {
                                          className: "text-white font-bold",
                                          children: "G",
                                        }),
                                      }),
                                      (0, Yn.jsx)("span", {
                                        className: "text-white font-semibold",
                                        children: e.groupName,
                                      }),
                                    ],
                                  },
                                  e._id
                                )
                              )
                            : (0, Yn.jsx)("li", {
                                className: "text-gray-400",
                                children: "No groups available",
                              }),
                      }),
                ],
              }),
              (0, Yn.jsx)("div", {
                className:
                  "bg-zinc-900 w-full md:w-3/4 h-screen p-4 flex flex-col transition-all duration-300 shadow-lg " +
                  (n ? "block" : "hidden md:block"),
                children: e
                  ? (0, Yn.jsxs)(Yn.Fragment, {
                      children: [
                        (0, Yn.jsxs)("div", {
                          className:
                            "flex items-center mb-2 bg-zinc-700 p-2 rounded-lg",
                          children: [
                            (0, Yn.jsx)("button", {
                              onClick: () => {
                                r(!1), t(null);
                              },
                              className:
                                "text-gray-300 hover:text-gray-500 transition duration-200 ease-in-out focus:outline-none",
                              children: (0, Yn.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-8 w-10",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0, Yn.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 19l-7-7 7-7",
                                }),
                              }),
                            }),
                            (0, Yn.jsxs)("h3", {
                              className:
                                "text-2xl font-bold text-gray-100 ml-4 flex items-center",
                              children: [
                                (0, Yn.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3",
                                  children: (0, Yn.jsx)("span", {
                                    className: "text-white font-bold",
                                    children: e.username
                                      ? e.username.charAt(0)
                                      : "G",
                                  }),
                                }),
                                e.username || e.groupName,
                              ],
                            }),
                          ],
                        }),
                        (0, Yn.jsx)(Wo, { currentChat: e }),
                      ],
                    })
                  : (0, Yn.jsx)("div", {
                      className:
                        "flex items-center justify-center text-gray-400 h-full",
                      children: "Select a user or group to start chatting.",
                    }),
              }),
              (0, Yn.jsx)(rr, {
                isOpen: c,
                onClose: () => d(!1),
                title: "Create New Group",
                children: (0, Yn.jsx)(Oo, {
                  users: a,
                  onSubmit: (e) => {
                    d(!1);
                  },
                  onClose: () => d(!1),
                }),
              }),
              (0, Yn.jsx)(rr, {
                isOpen: f,
                onClose: () => p(!1),
                title: "Edit Profile",
                children: (0, Yn.jsx)($o, {
                  user: o,
                  onSubmit: (e) => {
                    p(!1);
                  },
                  onClose: () => p(!1),
                }),
              }),
            ],
          });
    },
    Ko = () => (0, Yn.jsx)("div", { children: (0, Yn.jsx)(Qo, {}) });
  function Go() {
    const { isAuthenticate: e, loading: t } = Xn();
    return t
      ? (0, Yn.jsx)("div", {
          className: "flex justify-center items-center h-screen",
          children: (0, Yn.jsx)(Pe, { color: "#36D7B7" }),
        })
      : (0, Yn.jsxs)(ve, {
          children: [
            (0, Yn.jsx)(ge, {
              path: "/auth",
              element: e ? (0, Yn.jsx)(me, { to: "/" }) : (0, Yn.jsx)(nr, {}),
            }),
            (0, Yn.jsx)(ge, {
              path: "/",
              element: e
                ? (0, Yn.jsx)(Ko, {})
                : (0, Yn.jsx)(me, { to: "/auth" }),
            }),
          ],
        });
  }
  const Yo = function () {
    return (0, Yn.jsx)(Zn, {
      children: (0, Yn.jsx)(Se, { children: (0, Yn.jsx)(Go, {}) }),
    });
  };
  l.createRoot(document.getElementById("root")).render((0, Yn.jsx)(Yo, {}));
})();
//# sourceMappingURL=main.86c511e2.js.map
