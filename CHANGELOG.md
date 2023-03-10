# Changelog

## 6.1.0

- Add `ModalProvider`: instead of adding `<DynamicModal />` an app should be wrapped in `<ModalProvider>{ ... }</ModalProvider>`

## 6.0.1

- Fix z-index

## 6.0.0

- **BREAKING:** `VariantSelector` removed (can be easily recreated using `Dropdown`)
- Improvements in floating components (Modal, Dropdown, ContextMenu, Popover): correct handling of dismiss & FloatingTree

## 5.4.0

- `bubbles: false` for all floating components

## 5.3.18

- Tabs forwardRef

## 5.3.17

- Fix `GroupOption` type

## 5.3.16

- Fixing CJS build (🤞)

## 5.3.15

- `findOptions` helper for multi-select ReactSelect

## 5.3.14

- Dropdown appear animation

## 5.3.11

- Use negative tabIndex for GenericPopover body

## 5.3.9

- Fix portal ID logic

## 5.3.8

- All modals render in same portal by default
- Predefined portal IDs for dropdowns & modals

## 5.3.5

- `postalId` prop for floating UI elements & predefined portal IDs

## 5.3.4

- Don’t conditionally render the FloatingPortal

## 5.3.1

- Fix forwarding `className` for `MenuElement`
- Cleanups, better `.prettierrc`

## 5.3.0

- New component - `ContextMenu`

## 5.2.5

- `onOpen` & `onClose` for Dropdown

## 5.2.4

- Fix styles for ReactSelect with `isMulti` set to `true`

## 5.2.3

- Fix popover overlay css

## 5.2.1

- `WithTooltip` forward ref

## 5.2.0

- added `withSizeLimits` property for Dropdown

## 5.1.4

- popover render accepts body

## 5.1.3

- fix popover animations

## 5.1.0

- added `usePopover` hook

## 5.0.4

- pass Popover props to FloatingFocusManager

## 5.0.3

- fix SegmentedControl on mount behavior

## 5.0.0

- **BREAKING:** Dropdown implemented with Floating UI, added support for sub menus. Components renamed - now Dropdown exports:
  - `Dropdown`
  - `Menu`
  - `MenuElement`
  - `MenuDivider`
  - `MenuGroup`
- Added: Popover

## 4.9.0

- Per-folder TS declarations

## 4.8.12

- Modals create FloatingTree if needed
- Fix double handle calls on modal outside click

## 4.8.10

- Bump versions
- Fix: Input Font is not white in Dark mode for ReactSelect (#3)

## 4.8.6

- ModalBody & ModalFooter forward refs

## 4.8.5

- hover & focus states for SegmentedControl

## 4.8.3

- Add small size for SegmentedControl

## 4.8.0

- Add SegmentedControl

## 4.7.0

- Use FloatingUI instead of ReactModal
- All dynamic modals are awaitable
- Provide FloatingContext to propagate root element
- Tooltips using FloatingUI

## 4.6.8

- Add indeterminate styling for checkboxes

## 4.6.5

- Generic ReactSelect

## 4.6.4

- Input icon support ReactElement, not only strings

## 4.6.3

- Dropdown use hooks for outside & inside clicks

## 4.6.0

- Moved to React 18

## 4.5.12

- Added gauge component

## 4.5.7

- Fixed exports

## 4.5.5

- Added full ghost option to Button.Ghost

## 4.5.4

- Forward refs for all Button types

## 4.5.1

- Added blockquote
- Forward ref for button
- Fixed ESM
- Fixed Radios

## 4.4.0

- Added loading toasts
- Added Kbd component
- Added bordered toasts
- Added different shadows for toasts

## 4.3.0

- Fix rollup config
- Default export for CJS

## 4.2.0

- ➕ Groups support for react-select
- Storybook to webpack5

## 4.1.7

- ➕ Error state for react-select

## 4.1.0

- Refactor code

## 4.0.0

- ➕ new component `Slider`
- ➕ new component `ReactSelect`

## 3.7.0

- ➕ awaitable `dynamicModal`
- ➕ switched to eventemmiter3
- ➕ update `copyStringToClipboard`