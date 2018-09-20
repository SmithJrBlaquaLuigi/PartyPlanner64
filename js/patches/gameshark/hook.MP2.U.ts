namespace PP64.patches.gameshark.hook {

  // Example
  // Double Walk Speed (plc)
  // 810657EE 0005

  // Installs a Gameshark hook for MP2 (U)
  export const MP2U = new class MP2UHook extends PP64.patches.gameshark.HookBase {
    // File to store the cheat routine.
    protected MAINFS_CHEAT_FILE = [0, 140];

    // Location safe to write a small set of hooking code
    protected HOOK_ROM_START_OFFSET = 0xD2BC0;
    protected HOOK_RAM_START_OFFSET = 0xD1FC0;

    // Use controller routine 0x800A2038 (ROM 0xA2C38) to reach the hook
    protected HOOK_JUMP_ROM_OFFSET = 0xA2C38;

    // Value initially in the spot we cache the hook routine.
    protected HOOK_CACHE_DEFAULT_VALUE = 0x4661756C;

    apply(romBuffer: ArrayBuffer) {
      const romView = new DataView(romBuffer);

      this.applyHook(romView);
      this.writeHookCode(romView);
    }

    applyHook(romView: DataView) {
      // Jump out from the controller routine to a small fixed position hook.
      // This hook will read the cheat buffer (if not already read) and jump to it.

      let hookJ = (window as any).MIPSInst.parse(`J ${this.HOOK_RAM_START_OFFSET + 4}`);

      // Remember the stack adjustment, and NOP it out here.
      const endInsts = [
        romView.getUint32(this.HOOK_JUMP_ROM_OFFSET),
        romView.getUint32(this.HOOK_JUMP_ROM_OFFSET + 4),
        romView.getUint32(this.HOOK_JUMP_ROM_OFFSET + 8),
      ];
      romView.setUint32(this.HOOK_JUMP_ROM_OFFSET, hookJ);
      romView.setUint32(this.HOOK_JUMP_ROM_OFFSET + 4, 0);
      romView.setUint32(this.HOOK_JUMP_ROM_OFFSET + 8, 0);

      const cheatRoutine = PP64.patches.gameshark.getCheatRoutineBuffer({ endInsts });
      (PP64 as any).fs.mainfs.write(this.MAINFS_CHEAT_FILE[0], this.MAINFS_CHEAT_FILE[1], cheatRoutine);
    }
  }
}