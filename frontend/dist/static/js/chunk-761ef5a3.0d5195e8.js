(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-761ef5a3"],
  {
    "622d": function (t, a, s) {
      "use strict";
      s("cff6");
    },
    9406: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "dashboard-container" },
            [
              s(
                "el-row",
                { attrs: { gutter: 20 } },
                [
                  s(
                    "el-col",
                    { attrs: { xs: 24, sm: 12, lg: 6 } },
                    [
                      s(
                        "el-card",
                        {
                          staticClass: "mgb20",
                          staticStyle: { height: "252px" },
                          attrs: { shadow: "hover" },
                        },
                        [
                          s("div", { staticClass: "user-info" }, [
                            s(
                              "div",
                              { staticClass: "el-upload" },
                              [
                                s(
                                  "el-upload",
                                  {
                                    staticClass: "avatar-uploader",
                                    attrs: {
                                      headers: {
                                        "annotate-system-token": t.token,
                                      },
                                      name: "avatar",
                                      action:
                                        "http://localhost:8000/api/setAvatar/",
                                      "show-file-list": !1,
                                      accept: "image/*",
                                      "on-success": t.handleSuccess,
                                      "on-error": t.handleError,
                                    },
                                  },
                                  [
                                    s("img", {
                                      staticClass: "avatar",
                                      attrs: { src: t.avatar, alt: "" },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                            s("div", { staticClass: "user-info-cont" }, [
                              s("div", { staticClass: "user-info-name" }, [
                                t._v(" " + t._s(t.name) + " "),
                              ]),
                            ]),
                          ]),
                          s("div", { staticClass: "user-info-list" }, [
                            t._v(" ????????? "),
                            s("span", [t._v(t._s(t.roles[0]))]),
                          ]),
                        ]
                      ),
                      s("el-card", [
                        s("h1", [t._v("????????????")]),
                        s("h3", [t._v("??????????????????,????????????")]),
                        s("ol", [
                          s("li", [t._v("??????????????????")]),
                          s("li", [
                            t._v(" ???????????????????????? "),
                            s("ul", [
                              s("li", [
                                t._v(
                                  "?????????utf-8(???????????????????????????),??????????????? .txt??????"
                                ),
                              ]),
                              s("li", [
                                t._v(
                                  " ??????????????????,????????????????????????????????????????????????,????????????????????????????????????????????????????????? "
                                ),
                              ]),
                            ]),
                          ]),
                          s("li", [t._v("????????????????????????")]),
                          s("li", [t._v("????????????")]),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  s(
                    "el-col",
                    { attrs: { xs: 24, sm: 12, lg: 12 } },
                    [s("TodoList")],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [],
        r = s("f3f3"),
        n = s("2f62"),
        i = s("5f87"),
        l = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            [
              s(
                "el-card",
                { staticClass: "mgb20", attrs: { shadow: "hover" } },
                [
                  s("div", [s("h1", [t._v("TodoList")])]),
                  t._l(t.todos, function (a, e) {
                    return s("div", { key: e }, [
                      s("li", [t._v(" " + t._s(a) + " ")]),
                      s("hr"),
                    ]);
                  }),
                ],
                2
              ),
            ],
            1
          );
        },
        c = [],
        d = {
          name: "TodoList",
          data: function () {
            return {
              todos: [
                "?????????????????????????????????,?????????????????????????????????????????????????????????",
                "???????????????????????????????????????????????????,??????????????????id??????????????????????????????",
                "????????????????????????????????????",
                "??????????????????????????????",
                "????????????????????????",
                "???????????????????????????????????????",
                "??????????????????",
                "?????????????????????bootstrap??????",
                "????????????",
                "????????????",
                "??????",
              ],
            };
          },
        },
        u = d,
        v = s("0c7c"),
        f = Object(v["a"])(u, l, c, !1, null, null, null),
        h = f.exports,
        _ = {
          name: "Dashboard",
          components: { TodoList: h },
          computed: Object(r["a"])(
            {
              token: function () {
                return Object(i["a"])();
              },
            },
            Object(n["b"])(["name", "avatar", "roles"])
          ),
          methods: {
            handleSuccess: function (t) {
              this.$store.dispatch("user/setAvatar", t.data.avatar);
            },
            handleError: function () {
              this.$message.error("????????????");
            },
          },
        },
        m = _,
        p = (s("622d"), Object(v["a"])(m, e, o, !1, null, "2a188fd4", null));
      a["default"] = p.exports;
    },
    cff6: function (t, a, s) {},
  },
]);
