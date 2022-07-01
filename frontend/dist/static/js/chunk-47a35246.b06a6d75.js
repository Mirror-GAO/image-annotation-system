(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-47a35246"],
  {
    7434: function (t, e, a) {
      "use strict";
      a("b6f3");
    },
    b6f3: function (t, e, a) {},
    ecac: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "app-container" }, [
            t.user
              ? a(
                  "div",
                  [
                    a(
                      "el-row",
                      { attrs: { gutter: 20 } },
                      [
                        a(
                          "el-col",
                          { attrs: { span: 8, xs: 24 } },
                          [a("UserCard", { attrs: { user: t.user } })],
                          1
                        ),
                        a(
                          "el-col",
                          { attrs: { span: 16, xs: 24 } },
                          [
                            a(
                              "el-card",
                              [
                                a(
                                  "el-tabs",
                                  {
                                    model: {
                                      value: t.activeTab,
                                      callback: function (e) {
                                        t.activeTab = e;
                                      },
                                      expression: "activeTab",
                                    },
                                  },
                                  [
                                    a(
                                      "el-tab-pane",
                                      {
                                        attrs: {
                                          label: "账号信息",
                                          name: "account",
                                        },
                                      },
                                      [
                                        a("Account", {
                                          attrs: { user: t.user },
                                        }),
                                      ],
                                      1
                                    ),
                                    a(
                                      "el-tab-pane",
                                      {
                                        attrs: {
                                          label: "操作日志",
                                          name: "timeline",
                                        },
                                      },
                                      [a("Timeline")],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : t._e(),
          ]);
        },
        n = [],
        r = a("f3f3"),
        c = (a("b0c0"), a("2f62")),
        i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              a(
                "el-col",
                { attrs: { xs: 24, sm: 24, lg: 24 } },
                [
                  a("el-card", { staticClass: "box-card" }, [
                    a(
                      "div",
                      {
                        staticClass: "clearfix",
                        attrs: { slot: "header" },
                        slot: "header",
                      },
                      [a("span", [t._v("个人信息")])]
                    ),
                    a("div", [
                      a("div", { staticStyle: { "text-align": "center" } }, [
                        a(
                          "div",
                          { staticClass: "el-upload" },
                          [
                            a(
                              "el-upload",
                              {
                                staticClass: "avatar-uploader",
                                attrs: {
                                  headers: { "annotate-system-token": t.token },
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
                                a("img", {
                                  staticClass: "avatar",
                                  attrs: { src: t.avatar, alt: "" },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                      a("ul", { staticClass: "user-info" }, [
                        a(
                          "li",
                          [
                            a("SvgIcon", { attrs: { "icon-class": "user" } }),
                            t._v(" 用户昵称 "),
                            a("div", { staticClass: "user-right" }, [
                              t._v(" " + t._s(t.user.name) + " "),
                            ]),
                          ],
                          1
                        ),
                        a(
                          "li",
                          [
                            a("SvgIcon", { attrs: { "icon-class": "anq" } }),
                            t._v(" 安全设置 "),
                            a("div", { staticClass: "user-right" }, [
                              a("a", [t._v("修改密码")]),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        l = [],
        o = a("5f87"),
        u = {
          props: {
            user: {
              type: Object,
              default: function () {
                return { name: "" };
              },
            },
          },
          computed: Object(r["a"])(
            {
              token: function () {
                return Object(o["a"])();
              },
            },
            Object(c["b"])(["avatar"])
          ),
          methods: {
            handleSuccess: function (t) {
              this.$store.dispatch("user/setAvatar", t.data.avatar);
            },
            handleError: function () {
              this.$message.error("上传失败");
            },
          },
        },
        m = u,
        d = (a("7434"), a("0c7c")),
        p = Object(d["a"])(m, i, l, !1, null, "7e14b106", null),
        f = p.exports,
        v = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "block" },
            [
              a(
                "el-timeline",
                t._l(t.timeline, function (e, s) {
                  return a(
                    "el-timeline-item",
                    {
                      key: s,
                      attrs: { timestamp: e.timestamp, placement: "top" },
                    },
                    [
                      a("el-card", [
                        a("h4", [t._v(t._s(e.title))]),
                        a("p", [t._v(t._s(e.content))]),
                      ]),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        b = [],
        h = {
          data: function () {
            return {
              timeline: [
                {
                  timestamp: "2021/4/20",
                  title: "标注活动",
                  content: "Syngou committed 2021/4/20 20:46",
                },
                {
                  timestamp: "2021/4/21",
                  title: "标注活动",
                  content: "Syngou committed 2021/4/21 20:46",
                },
                {
                  timestamp: "2021/4/22",
                  title: "登录",
                  content: "Syngou committed 2021/4/22 20:46",
                },
                {
                  timestamp: "2021/4/23",
                  title: "注销登录状态",
                  content: "Syngou committed 2021/4/23 20:46",
                },
              ],
            };
          },
        },
        g = h,
        _ = Object(d["a"])(g, v, b, !1, null, null, null),
        j = _.exports,
        y = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "el-form",
            [
              a(
                "el-form-item",
                { attrs: { label: "Name" } },
                [
                  a("el-input", {
                    model: {
                      value: t.user.name,
                      callback: function (e) {
                        t.$set(
                          t.user,
                          "name",
                          "string" === typeof e ? e.trim() : e
                        );
                      },
                      expression: "user.name",
                    },
                  }),
                ],
                1
              ),
              a(
                "el-form-item",
                [
                  a(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: t.submit } },
                    [t._v(" 更新 ")]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        O = [],
        k = a("c24f"),
        x = {
          props: {
            user: {
              type: Object,
              default: function () {
                return { name: "" };
              },
            },
          },
          methods: {
            submit: function () {
              var t = this;
              "" == this.user.name
                ? this.$message.error("用户名不能为空")
                : Object(k["e"])(this.user).then(function (e) {
                    Object(o["c"])(e.data.token),
                      t.$store.dispatch("user/setName", t.user.name),
                      t.$message({
                        message: "用户信息更新成功",
                        type: "success",
                        duration: 5e3,
                      });
                  });
            },
          },
        },
        C = x,
        $ = Object(d["a"])(C, y, O, !1, null, null, null),
        w = $.exports,
        S = {
          name: "Profile",
          components: { UserCard: f, Timeline: j, Account: w },
          data: function () {
            return { user: {}, activeTab: "account" };
          },
          computed: Object(r["a"])({}, Object(c["b"])(["name"])),
          created: function () {
            this.getUser();
          },
          methods: {
            getUser: function () {
              this.user = { name: this.name };
            },
          },
        },
        E = S,
        T = Object(d["a"])(E, s, n, !1, null, null, null);
      e["default"] = T.exports;
    },
  },
]);
