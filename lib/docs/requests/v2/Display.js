    /**
     * Generates Display Protocol. See [Phoenix RCP](https://github.jibo.com/phoenix/jibo-command-protocol) for `JIBO` docs.
     * @method Requester.v2.display#generateProtocol
     * @param {string} name - Unique name of the Display.
     * @param {(JIBO.v2.behaviors.EyeDisplay | JIBO.v2.behaviors.NoneDisplay | JIBO.v2.behaviors.MenuDisplay | JIBO.v2.behaviors.Image | JIBO.v2.behaviors.PhotoGallery | JIBO.v2.behaviors.LoopMembersMenu | JIBO.v2.behaviors.SkillDisplay | JIBO.v2.behaviors.TextDisplay)} view - The view to be displayed.
     * @param {(0 | 1 | 2 | 3 | 4)} layer - Which layer the Display will be active on.
     * @param {boolean} visible - If `visible` is `false`, the display will not show until a ShowDisplayAction is called on it.
     * @param {boolean} keepDisplay - If `keepDisplay` is `true`, the display will stay upon completion until removed (?)
     * @param {JIBO.v2.behaviors.Action[]} onCancel - Action handlers for when the Display is cancelled.
     * @param {("dim" | "clear")} [overlay] - Overlay options for the Display.
     * @returns {JIBO.v2.behaviors.Display}
     */