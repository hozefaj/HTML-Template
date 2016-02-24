define(function (require, exports, module) {
  "use strict";
  var commandName = "Template",
    Menus = brackets.getModule("command/Menus"),
    CommandManager = brackets.getModule("command/CommandManager"),
    EditorManager = brackets.getModule("editor/EditorManager"),
    template;
  
    /*
     * Implementation
     */
  function loadhtml() {
    template = require('text!template.html');
    EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
  }
  /*
   * Command
   */
  CommandManager.register("Sample HTML", commandName, loadhtml);
  /*
   * Custom menu
   */
  var menu = Menus.addMenu("Html", "edgedocks.custom.menu");
  menu.addMenuItem(commandName);
});