namespace PP64.header {
  interface IHeaderActionItem {
    name: string;
    icon: string;
    type: PP64.types.Action;
    details: string;
    dropdownFn?: Function;
    advanced?: boolean;
  }

  const actions_norom: IHeaderActionItem[] = [
    { "name": "Load ROM", "icon": "img/header/romcart.png", "type": $actType.ROM_LOAD, "details": "Load a ROM image and read its boards" },
    { "name": "New board", "icon": "img/header/newboard.png",
      "type": $actType.BOARD_NEW, "details": "Create a new board",
      "dropdownFn": newboardDropdown
    },
    { "name": "Import board", "icon": "img/header/loadboard.png", "type": $actType.BOARD_LOAD, "details": "Import a board file into the editor" },
    { "name": "Export board", "icon": "img/header/saveboard.png", "type": $actType.BOARD_SAVE, "details": "Export a board file for distribution" },
    //{ "name": "Copy", "icon": "img/header/copyboard.png", "type": $actType.BOARD_COPY, "details": "Create a copy of this board" },
    // { "name": "Edit Details", "icon": "img/header/editdetails.png", "type": $actType.BOARD_DETAILS, "details": "View and edit various board details" },
    // { "name": "Set BG", "icon": "img/header/setbg.png", "type": $actType.SET_BG, "details": "Change the board background image" },
    { "name": "Screenshot", "icon": "img/header/screenshot.png",
      "type": $actType.SCREENSHOT, "details": "Take a screenshot of the current board",
      "dropdownFn": screenshotDropdown
    },
    { "name": "Events", "icon": "img/header/events.png", "type": $actType.EVENTS, "details": "View and manage events", "advanced": true },
    { "name": "Settings", "icon": "img/header/settings.png", "type": $actType.SETTINGS, "details": "Editor settings" },
    { "name": "About", "icon": "img/header/about.png", "type": $actType.ABOUT, "details": "About PartyPlanner64" },
  ];

  const actions_rom_romboard: IHeaderActionItem[] = [
    { "name": "Close ROM", "icon": "img/header/romclose.png", "type": $actType.ROM_UNLOAD, "details": "Close the ROM file and remove its boards" },
    { "name": "Save ROM", "icon": "img/header/romsave.png", "type": $actType.ROM_SAVE, "details": "Save changes out to a ROM file" },
    { "name": "New board", "icon": "img/header/newboard.png",
      "type": $actType.BOARD_NEW, "details": "Create a new board",
      "dropdownFn": newboardDropdown
    },
    { "name": "Import board", "icon": "img/header/loadboard.png", "type": $actType.BOARD_LOAD, "details": "Import a board file into the editor" },
    { "name": "Export board", "icon": "img/header/saveboard.png", "type": $actType.BOARD_SAVE, "details": "Export a board file for distribution" },
    { "name": "Import file dump", "icon": "img/header/dump.png", "type": $actType.DUMP_LOAD, "details": "Import and overwrite with a dump of ROM data", "advanced": true },
    { "name": "Export file dump", "icon": "img/header/dump.png", "type": $actType.DUMP_SAVE, "details": "Export a zip of all the ROM file data", "advanced": true },
    { "name": "Screenshot", "icon": "img/header/screenshot.png",
      "type": $actType.SCREENSHOT, "details": "Take a screenshot of the current board",
      "dropdownFn": screenshotDropdown
    },
    { "name": "Events", "icon": "img/header/events.png", "type": $actType.EVENTS, "details": "View and manage events", "advanced": true },
    { "name": "Patches", "icon": "img/header/rompatch.png", "type": $actType.PATCHES, "details": "Apply patches to the ROM", "advanced": true },
    { "name": "Model Viewer", "icon": "img/header/modelviewer.png", "type": $actType.MODEL_VIEWER, "details": "View 3D model data in the ROM" },
    //{ "name": "Strings", "icon": "img/header/stringseditor.png", "type": $actType.STRINGS_EDITOR, "details": "View and edit strings in the ROM" },
    //{ "name": "Copy", "icon": "img/header/copyboard.png", "type": $actType.BOARD_COPY, "details": "Create a copy of this board" },
    // { "name": "View Details", "icon": "img/header/editdetails.png", "type": $actType.BOARD_DETAILS, "details": "View various board details" },
    { "name": "Settings", "icon": "img/header/settings.png", "type": $actType.SETTINGS, "details": "Editor settings" },
    { "name": "About", "icon": "img/header/about.png", "type": $actType.ABOUT, "details": "About PartyPlanner64" },
  ];

  const actions_rom_normalboard: IHeaderActionItem[] = [
    { "name": "Close ROM", "icon": "img/header/romclose.png", "type": $actType.ROM_UNLOAD, "details": "Close the ROM file and remove its boards" },
    { "name": "Save ROM", "icon": "img/header/romsave.png", "type": $actType.ROM_SAVE, "details": "Save changes out to a ROM file" },
    {
      "name": "Overwrite", "icon": "img/header/romoverwrite.png",
      "type": $actType.BOARD_WRITE, "details": "Overwrite a ROM board with the current board",
      "dropdownFn": overwriteDropdown
    },
    { "name": "New board", "icon": "img/header/newboard.png",
      "type": $actType.BOARD_NEW, "details": "Create a new board",
      "dropdownFn": newboardDropdown
    },
    { "name": "Import board", "icon": "img/header/loadboard.png", "type": $actType.BOARD_LOAD, "details": "Import a board file into the editor" },
    { "name": "Export board", "icon": "img/header/saveboard.png", "type": $actType.BOARD_SAVE, "details": "Export a board file for distribution" },
    { "name": "Import file dump", "icon": "img/header/dump.png", "type": $actType.DUMP_LOAD, "details": "Import and overwrite with a dump of ROM data", "advanced": true },
    { "name": "Export file dump", "icon": "img/header/dump.png", "type": $actType.DUMP_SAVE, "details": "Export a zip of all the ROM file data", "advanced": true },
    { "name": "Screenshot", "icon": "img/header/screenshot.png",
      "type": $actType.SCREENSHOT, "details": "Take a screenshot of the current board",
      "dropdownFn": screenshotDropdown
    },
    { "name": "Events", "icon": "img/header/events.png", "type": $actType.EVENTS, "details": "View and manage events", "advanced": true },
    { "name": "Patches", "icon": "img/header/rompatch.png", "type": $actType.PATCHES, "details": "Apply patches to the ROM", "advanced": true },
    { "name": "Model Viewer", "icon": "img/header/modelviewer.png", "type": $actType.MODEL_VIEWER, "details": "View 3D model data in the ROM" },
    //{ "name": "Strings", "icon": "img/header/stringseditor.png", "type": $actType.STRINGS_EDITOR, "details": "View and edit strings in the ROM" },
    //{ "name": "Copy", "icon": "img/header/copyboard.png", "type": $actType.BOARD_COPY, "details": "Create a copy of this board" },
    // { "name": "Edit Details", "icon": "img/header/editdetails.png", "type": $actType.BOARD_DETAILS, "details": "View and edit various board details" },
    // { "name": "Set BG", "icon": "img/header/setbg.png", "type": $actType.SET_BG, "details": "Change the board background image" },
    { "name": "Settings", "icon": "img/header/settings.png", "type": $actType.SETTINGS, "details": "Editor settings" },
    { "name": "About", "icon": "img/header/about.png", "type": $actType.ABOUT, "details": "About PartyPlanner64" },
  ];

  const actions_back: IHeaderActionItem[] = [
    { "name": "Back to editor", "icon": "img/header/back.png", "type": $actType.BOARD_EDITOR, "details": "Return to the board editor" },
  ];

  const actions_events: IHeaderActionItem[] = actions_back.concat([
    { "name": "Create Event", "icon": "img/header/add.png", "type": $actType.CREATEEVENT, "details": "Create your own event code" },
    { "name": "Import Event", "icon": "img/header/eventload.png", "type": $actType.EVENT_LOAD, "details": "Load event code from a file" },
  ]);

  const actions_createevent: IHeaderActionItem[] = [
    { "name": "Back to event list", "icon": "img/header/back.png", "type": $actType.BACK_TO_EVENTS, "details": "Return to the event list" },
    { "name": "Save", "icon": "img/header/save.png", "type": $actType.SAVE_EVENT, "details": "Save the event" },
  ];

  //const action_overflow = { "name": "", "icon": "img/header/more.png", "type": "MORE", "details": "More options" };
  const action_overflow: IHeaderActionItem = { "name": "", "icon": "", "type": "MORE" as any, "details": "More options" };

  function _handleAction(action: PP64.types.Action) {
    switch(action) {
      case $actType.ROM_LOAD:
        PP64.utils.input.openFile(".z64,.v64,.rom,.n64", romSelected);
        break;
      case $actType.ROM_UNLOAD:
        PP64.romhandler.clear();
        PP64.boards.clearBoardsFromROM();
        PP64.app.boardsChanged();
        PP64.boards.setCurrentBoard(0);
        PP64.app.romLoadedChanged();
        break;
      case $actType.ROM_SAVE:
        PP64.app.blockUI(true);
        setTimeout(() => {
          PP64.romhandler.saveROM();
          PP64.app.blockUI(false);

          setTimeout(() => {
            PP64.app.showMessageHTML(`Before trying the game, review
              <a href="https://github.com/PartyPlanner64/PartyPlanner64/wiki/Emulator-Setup" target="_blank">emulator setup instructions</a>.`);
          }, 0);
        }, 0);
        break;
      case $actType.BOARD_LOAD:
        PP64.utils.input.openFile(".json", boardSelected);
        break;
      case $actType.BOARD_SAVE:
        let curBoard = PP64.boards.getCurrentBoard(true);
        let boardBlob = new Blob([JSON.stringify(curBoard)]);
        saveAs(boardBlob, curBoard.name + ".json");
        break;
      case $actType.BOARD_COPY:
        PP64.boards.copyCurrentBoard();
        break;
      case $actType.BOARD_DETAILS:
        PP64.app.changeView($viewType.DETAILS);
        break;
      case $actType.BOARD_EDITOR:
        PP64.app.changeView($viewType.EDITOR);
        break;
      case $actType.SETTINGS:
        PP64.app.changeView($viewType.SETTINGS);
        break;
      case $actType.ABOUT:
        PP64.app.changeView($viewType.ABOUT);
        break;
      case $actType.MODEL_VIEWER:
        PP64.app.changeView($viewType.MODELS);
        break;
      case $actType.EVENTS:
        PP64.app.changeView($viewType.EVENTS);
        break;
      case $actType.BACK_TO_EVENTS:
        if ((PP64 as any).events.createEventPromptExit()) {
          PP64.app.changeCurrentEvent(null);
          PP64.app.changeView($viewType.EVENTS);
        }
        break;
      case $actType.EVENT_LOAD:
        PP64.utils.input.openFile(".s", eventFileSelected);
        break;
      case $actType.SAVE_EVENT:
        (PP64 as any).events.saveEvent();
        break;
      case $actType.CREATEEVENT:
        PP64.app.changeView($viewType.CREATEEVENT);
        break;
      case $actType.STRINGS_EDITOR:
        PP64.app.changeView($viewType.STRINGS);
        break;
      case $actType.PATCHES:
        PP64.app.changeView($viewType.PATCHES);
        break;
      case $actType.SET_BG:
        (PP64 as any).utils.input.openFile("image/*", bgSelected);
        break;
      case $actType.DUMP_LOAD:
        (PP64 as any).utils.input.openFile(".zip", dumpSelected);
        break;
      case $actType.DUMP_SAVE:
        PP64.app.blockUI(true);
        PP64.utils.dump.create(dumpCreated);
        break;
      default:
        break;
    }
  }

  function romSelected(event: any) {
    let file = event.target.files[0];
    if (!file)
      return;

    PP64.app.blockUI(true);
    let reader = new FileReader();
    reader.onload = (e: any) => {
      if (!e.target.result) {
        PP64.app.blockUI(false);
        return;
      }

      let promise = PP64.romhandler.setROMBuffer(e.target.result);
      if (!promise)
        return; // The ROM handler showed a message, so we don't need to unblock UI

      promise.then(value => {
        PP64.app.romLoadedChanged();
        PP64.boards.loadBoardsFromROM();
        PP64.app.blockUI(false);
        $$log("ROM loaded");
      }, reason => {
        $$log(`Error loading ROM: ${reason}`);
        PP64.app.showMessage("Error loading the ROM file.");
      });
    };
    reader.readAsArrayBuffer(file);
  }

  function boardSelected(event: any) {
    let file = event.target.files[0];
    if (!file)
      return;

    let reader = new FileReader();
    reader.onload = (e: any) => {
      let board;
      try {
        board = JSON.parse(e.target.result);
      } catch (e) {
        alert("Board could not be parsed.");
        return;
      }
      let boardIndex = PP64.boards.addBoard(board);
      PP64.boards.setCurrentBoard(boardIndex);
    };
    reader.readAsText(file);
  }

  function bgSelected(event: any) {
    let file = event.target.files[0];
    if (!file)
      return;

    let reader = new FileReader();
    reader.onload = error => {
      PP64.boards.setBG(reader.result);
      PP64.renderer.render();
    };
    reader.readAsDataURL(file);
  }

  function eventFileSelected(event: any) {
    const files = event.target && event.target.files;
    if (!(files && files[0]))
      return;

    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          let asm = e.target.result;
          PP64.adapters.events.createCustomEvent(asm);
          (PP64 as any).events.refreshEventsView();
        } catch (e) {
          PP64.app.showMessage("Event file load failed. " + e.toString());
          return;
        }
      };
      reader.readAsText(files[i]);
    }
  }

  function dumpSelected(event: any) {
    let file = event.target.files[0];
    if (!file)
      return;

    let reader = new FileReader();
    reader.onload = error => {
      // Extract the dump and replace ROM files.
      PP64.utils.dump.load(reader.result as ArrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  }

  function dumpCreated(blob: Blob) {
    saveAs(blob, `mp${PP64.romhandler.getGameVersion()}-files.zip`);
    PP64.app.blockUI(false);
  }

  function getActions(view: PP64.types.View, board: PP64.boards.IBoard, romLoaded: boolean) {
    // Pick the set of actions based on the state.
    let actions;
    if (view !== $viewType.EDITOR) {
      if (view === $viewType.EVENTS)
        actions = actions_events;
      else if (view === $viewType.CREATEEVENT)
        actions = actions_createevent;
      else
        actions = actions_back;
    }
    else if (!romLoaded)
      actions = actions_norom;
    else if (PP64.boards.boardIsROM(board))
      actions = actions_rom_romboard;
    else
      actions = actions_rom_normalboard;

    if (!PP64.settings.get($setting.uiAdvanced)) {
      actions = actions.filter(a => !a.advanced);
    }

    return actions;
  }

  interface IHeaderProps {
    view: PP64.types.View;
    board: PP64.boards.IBoard;
    romLoaded: boolean;
  }

  interface IHeaderState {
    actions: IHeaderActionItem[];
    totalActions: IHeaderActionItem[];
    overflow: any[];
  }

  export const Header = class Header extends React.Component<IHeaderProps, IHeaderState> {
    private actionsEl: HTMLElement | null = null;

    constructor(props: IHeaderProps) {
      super(props);

      const actions = getActions(props.view, props.board, props.romLoaded);
      this.state = {
        actions: actions,
        totalActions: actions, // Array of actions that never changes despite overflow
        overflow: []
      };
    }

    componentWillReceiveProps = (nextProps: IHeaderProps) => {
      const newActions = getActions(nextProps.view, nextProps.board, nextProps.romLoaded);

      if (!PP64.utils.arrays.equal(this.state.totalActions, newActions)) {
        this.setState({
          actions: newActions,
          totalActions: newActions,
          overflow: []
        });
      }
    }

    refresh() {
      const actions = getActions(this.props.view, this.props.board, this.props.romLoaded);
      this.setState({
        actions: actions,
        totalActions: actions,
        overflow: []
      });
    }

    render() {
      let actionsList = this.state.actions;
      let i = 0;
      let actions = actionsList.map(item => {
        if (item.dropdownFn) {
          return (
            <HeaderDropdown key={item.type} action={item} fn={item.dropdownFn} />
          );
        }
        return (
          <HeaderButton key={item.type} action={item} />
        );
      });
      let overflowAction;
      if (this.state.overflow.length) {
        overflowAction = <HeaderDropdown key={action_overflow.type}
          action={action_overflow} overflow={this.state.overflow} fn={moreDropdown} />;
      }
      return (
        <div className="header" role="toolbar">
          <HeaderLogo />
          <div className="headerActions" ref={(actionsEl => { this.actionsEl = actionsEl; })}>
            {actions}
            {overflowAction}
          </div>
        </div>
      );
    }

    componentDidMount() {
      window.addEventListener("resize", this.refresh.bind(this), false);
      setTimeout(() => {
        window.requestAnimationFrame(this.handleOverflow.bind(this));
      }, 0);
    }

    componentDidUpdate() {
      setTimeout(() => {
        window.requestAnimationFrame(this.handleOverflow.bind(this));
      }, 0);
    }

    componentWillUnmount() {
      $$log("Why did Header unmount?");
    }

    handleOverflow() {
      let actions = this.state.actions.slice();
      let hasOverflow = this.state.overflow.length;
      let overflow = this.state.overflow.slice();
      let el = ReactDOM.findDOMNode(this) as HTMLElement;
      let actionsEl = this.actionsEl!;
      while (actionsEl.offsetWidth > (el.offsetWidth - 215 - (hasOverflow ? 0 : 80))) { // Cut out logo and more if existing
        let lastAction = actionsEl.children[actions.length - (hasOverflow ? 2 : 1)] as HTMLElement; // Skip more
        if (!lastAction)
          break;
        lastAction.style.display = "none";
        overflow.unshift(actions.pop());
      }
      for (let i = 0; i < actionsEl.children.length - (hasOverflow ? 2 : 1); i++) {
        let actionEl = actionsEl.children[i] as HTMLElement;
        actionEl.style.display = "";
      }
      if (actions.length === this.state.actions.length && overflow.length === this.state.overflow.length)
        return;
      // $$log("Header.handleOverflow -> setState" + actions.length + ", " + overflow.length);
      this.setState({ actions, overflow });
    }
  };

  const HeaderLogo = class HeaderLogo extends React.Component {
    render() {
      return (
        <a href=".">
          <img className="headerLogo" src="img/header/logo.png" alt="PartyPlanner64 Logo" />
        </a>
      );
    }
  };

  interface IHeaderButtonProps {
    action: IHeaderActionItem;
  }

  const HeaderButton = class HeaderButton extends React.Component<IHeaderButtonProps> {
    handleClick = () => {
      _handleAction(this.props.action.type);
    }

    render() {
      let iconImg;
      if (this.props.action.icon) {
        iconImg = <img className="headerButtonIcon" src={this.props.action.icon}></img>;
      }
      return (
        <div className="headerButton" title={this.props.action.details}
          role="button" tabIndex={0}
          onClick={this.handleClick}
          onKeyDown={PP64.utils.react.makeKeyClick(this.handleClick, this)}>
          {iconImg}
          <span className="headerButtonText">{this.props.action.name}</span>
        </div>
      );
    }
  };

  interface IHeaderDropdownProps {
    action: IHeaderActionItem;
    fn: Function;
    overflow?: any;
  }

  const HeaderDropdown = class HeaderDropdown extends React.Component<IHeaderDropdownProps> {
    private dropdown: HTMLElement | null = null;

    state = { opened: false }

    globalClickHandler = (event: any) => {
      if (this.elementIsWithin(event.target))
        return;
      this.close();
    }

    addGlobalHandler() {
      document.addEventListener("click", this.globalClickHandler);
    }

    removeGlobalHandler() {
      document.removeEventListener("click", this.globalClickHandler);
    }

    elementIsWithin(el: HTMLElement) {
      if (!this.dropdown)
        return true;
      return this.dropdown.contains(el);
    }

    componentDidMount() {
      this.addGlobalHandler();
      window.addEventListener("resize", this.close, false);
    }

    componentWillUnmount() {
      this.removeGlobalHandler();
      window.removeEventListener("resize", this.close);
    }

    onButtonClick = (event: any) => {
      if (this.state.opened) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ opened: !this.state.opened });
    }

    onDropdownClick = (event: any) => {
      event.stopPropagation(); // So that clicking inside the dropdown doesn't call onButtonClick.
    }

    close = () => {
      if (this.state.opened)
        this.setState({ opened: false });
    }

    render() {
      let btnClass = "headerButton";
      let dropdownContent = null;
      if (this.state.opened) {
        btnClass += " headerButtonExpanded";
        let contents = this.props.fn(this.close, this.props);
        dropdownContent = (
          <div className="headerDropdown" onClick={this.onDropdownClick}>
            {contents}
          </div>
        );
      }
      let iconImg;
      if (this.props.action.icon) {
        iconImg = <img className="headerButtonIcon" src={this.props.action.icon}></img>;
      }
      return (
        <div className={btnClass} tabIndex={0} role="button" aria-haspopup="true"
          title={this.props.action.details}
          ref={(el) => this.dropdown = el}
          onClick={this.onButtonClick}>
          {iconImg}
          <span className="headerButtonText">{this.props.action.name}</span>
          <div className="headerDropdownArrow">▾</div>
          {dropdownContent}
        </div>
      );
    }
  };

  function overwriteDropdown(closeFn: any) {
    let validationResults = (PP64 as any).validation.validateCurrentBoardForOverwrite();
    if (!validationResults)
      return null;

    return validationResults.map(function(result: any, index: number) {
      return (
        <HeaderOverwriteBoardDropdownEntry
          name={result.name}
          errors={result.errors}
          warnings={result.warnings}
          unavailable={result.unavailable}
          closeCallback={closeFn}
          key={index}
          boardIndex={index} />
      );
    });
  }

  interface IHeaderOverwriteBoardDropdownEntryProps {
    unavailable: boolean;
    boardIndex: number;
    closeCallback: Function;
    name: string;
    errors: string[];
    warnings: string[];
  }

  const HeaderOverwriteBoardDropdownEntry = class HeaderOverwriteBoardDropdownEntry extends React.Component<IHeaderOverwriteBoardDropdownEntryProps> {
    boardClicked = (event: any) => {
      // Links inside the errors messages should not cause overwrites from warnings.
      if (event.target && event.target.tagName.toUpperCase() === "A") {
        event.stopPropagation();
        return;
      }

      if (!this.hasErrors() && !this.props.unavailable) {
        this.props.closeCallback();

        let adapter = (PP64 as any).adapters.getROMAdapter();
        if (!adapter)
          return;
        PP64.app.blockUI(true);
        let currentBoard = PP64.boards.getCurrentBoard();
        let promise = adapter.overwriteBoard(this.props.boardIndex, currentBoard);
        promise.then(() => {
          $$log("Board overwritten");
          PP64.boards.clearBoardsFromROM();
          PP64.boards.loadBoardsFromROM();

          let newBoardIndex = PP64.boards.indexOf(currentBoard);
          if (newBoardIndex < 0)
            newBoardIndex = 0;

          PP64.boards.setCurrentBoard(newBoardIndex);

          PP64.utils.analytics.recordEvent("board_write", {
            "event_category": "action",
            "event_label": currentBoard.name,
          });

          PP64.app.blockUI(false);
        }, (reason: any) => {
          $$log(`Error overriding board: ${reason}`);
          PP64.app.showMessage("Error overwriting the board.");
        });
      }
    }

    hasErrors() {
      return !!this.props.errors.length;
    }

    hasWarnings() {
      return !!this.props.warnings.length;
    }

    render() {
      let ddClass = "overwriteBoardEntry";
      let tooltip = `Overwrite ${this.props.name} with the current board.`;

      let failNodes: any = [];
      if (this.props.unavailable) {
        ddClass += " unavailable";
        failNodes.push(
          <div className="overwriteBoardMessage" key="unavailable">Board cannot be overwritten currently.</div>
        );
      }
      else {
        if (this.hasErrors()) {
          ddClass += " failed";
          failNodes = failNodes.concat(this.props.errors.map((fail, idx) => {
            return (
              <div className="overwriteBoardMessage" key={idx + "e"}>
                <img src="img/header/boarderror.png" alt="" className="overwriteBoardIssueIcon" />
                <span dangerouslySetInnerHTML={{__html: fail}}></span>
              </div>
            );
          }));
        }
        if (this.hasWarnings()) {
          failNodes = failNodes.concat(this.props.warnings.map((fail, idx) => {
            return (
              <div className="overwriteBoardMessage" key={idx + "w"}>
                <img src="img/header/boardwarning.png" alt="" className="overwriteBoardIssueIcon" />
                <span dangerouslySetInnerHTML={{__html: fail}}></span>
              </div>
            );
          }));
        }
      }

      if (failNodes.length) {
        tooltip = "Issues with the current board.";
        return (
          <div className={ddClass} onClick={this.boardClicked} title={tooltip}>
            <span className="overwriteBoardName">{this.props.name}</span>
            <br />
            {failNodes}
          </div>
        );
      }

      return (
        <div className={ddClass} onClick={this.boardClicked} title={tooltip}>
          <span className="overwriteBoardName">{this.props.name}</span>
        </div>
      );
    }
  };

  function moreDropdown(closeFn: Function, props: any) {
    let overflowItems = props.overflow;
    if (!overflowItems.length)
      return null;

    return overflowItems.map((item: IHeaderActionItem) => {
      if (item.dropdownFn) {
        return (
          <HeaderDropdown key={item.type} action={item} fn={item.dropdownFn} />
        );
      }
      return (
        <HeaderButton key={item.type} action={item} />
      );
    });
  }

  function newboardDropdown(closeFn: Function) {
    function onAccept(gameVersion: 1 | 2 | 3, type: PP64.types.BoardType, theme: any) {
      closeFn();
      const newBoardIdx = PP64.boards.addBoard(null, {
        game: gameVersion,
        type: type,
      });
      PP64.boards.setCurrentBoard(newBoardIdx);
    }
    const NewBoard = (PP64 as any).newboard.NewBoard;
    return (
      <NewBoard onAccept={onAccept} />
    );
  }

  function screenshotDropdown(closeFn: Function) {
    function onAccept(dataUri: string) {
      let win = window.open();
      if (win) {
        let doc = win.document;

        // Normally we can get a document.
        if (doc) {
          doc.write('');
          doc.close();
          doc.body.appendChild(doc.createElement('img')).src = dataUri;
        }
        else if ((win as any).eval) { // But in Electron, we have some stupid proxy object instead.
          (win as any).eval("document.write(''); document.close(); document.body.appendChild(document.createElement('img')).src = \"" + dataUri + "\";");
        }
      }

      closeFn();
    }
    const Screenshot = (PP64 as any).screenshot.Screenshot;
    return (
      <Screenshot onAccept={onAccept} />
    );
  }
}