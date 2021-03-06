import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import F7Badge from './badge';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7ListItemContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__reactRefs = {};

    this.state = (() => {
      return {
        hasInput: false,
        hasInlineLabel: false,
        hasInputInfo: false,
        hasInputErrorMessage: false,
        hasInputValue: false,
        hasInputFocused: false,
        hasInputInvalid: false
      };
    })();

    (() => {
      const self = this;
      self.onClick = self.onClick.bind(self);
      self.onChange = self.onChange.bind(self);
      self.onFocus = self.onFocus.bind(self);
      self.onBlur = self.onBlur.bind(self);
      self.onEmpty = self.onEmpty.bind(self);
      self.onNotEmpty = self.onNotEmpty.bind(self);
    })();
  }

  checkHasInputState() {
    const self = this;
    const props = self.props;
    const {
      itemInput,
      inlineLabel,
      itemInputWithInfo
    } = props;
    const hasInput = itemInput || self.state.hasInput;
    const hasInlineLabel = inlineLabel || self.state.hasInlineLabel;
    const hasInputInfo = itemInputWithInfo || self.state.hasInputInfo;
    const hasInputErrorMessage = self.state.hasInputErrorMessage;

    if (hasInput && !self.state.hasInput) {
      self.hasInputSet = true;
      self.setState({
        hasInput
      });
    } else if (!hasInput) {
      self.hasInputSet = false;
    }

    if (hasInputInfo && !self.state.hasInputInfo) {
      self.hasInputInfoSet = true;
      self.setState({
        hasInputInfo
      });
    } else if (!hasInputInfo) {
      self.hasInputInfoSet = false;
    }

    if (hasInputErrorMessage && !self.state.hasInputErrorMessage) {
      self.hasInputErrorMessageSet = true;
      self.setState({
        hasInputErrorMessage
      });
    } else if (!hasInputInfo) {
      self.hasInputErrorMessageSet = false;
    }

    if (hasInlineLabel && !self.state.hasInlineLabel) {
      self.hasInlineLabelSet = true;
      self.setState({
        hasInlineLabel
      });
    } else if (!hasInlineLabel) {
      self.hasInlineLabelSet = false;
    }
  }

  onClick(event) {
    this.dispatchEvent('click', event);
  }

  onChange(event) {
    this.dispatchEvent('change', event);
  }

  onFocus() {
    this.setState({
      hasInputFocused: true
    });
  }

  onBlur() {
    this.setState({
      hasInputFocused: false
    });
  }

  onEmpty() {
    this.setState({
      hasInputValue: false
    });
  }

  onNotEmpty() {
    this.setState({
      hasInputValue: true
    });
  }

  render() {
    const self = this;
    const props = self.props;
    const {
      id,
      className,
      style,
      radio,
      checkbox,
      value,
      name,
      checked,
      defaultChecked,
      readonly,
      disabled,
      required,
      media,
      header,
      footer,
      title,
      subtitle,
      text,
      after,
      badge,
      mediaList,
      mediaItem,
      badgeColor,
      itemInput,
      inlineLabel,
      itemInputWithInfo
    } = props;
    const hasInputFocused = self.state.hasInputFocused;
    const hasInputInvalid = self.state.hasInputInvalid;
    let hasInputValue = self.state.hasInputValue;
    let hasInput = itemInput || self.state.hasInput;
    let hasInlineLabel = inlineLabel || self.state.hasInlineLabel;
    let hasInputInfo = itemInputWithInfo || self.state.hasInputInfo;
    let hasInputErrorMessage = self.state.hasInputErrorMessage;
    const slotsContentStart = [];
    const slotsContent = [];
    const slotsContentEnd = [];
    const slotsInnerStart = [];
    const slotsInner = [];
    const slotsInnerEnd = [];
    const slotsAfterStart = [];
    const slotsAfter = [];
    const slotsAfterEnd = [];
    const slotsMedia = [];
    const slotsBeforeTitle = [];
    const slotsTitle = [];
    const slotsAfterTitle = [];
    const slotsSubtitle = [];
    const slotsText = [];
    const slotsHeader = [];
    const slotsFooter = [];
    let titleEl;
    let afterWrapEl;
    let afterEl;
    let badgeEl;
    let innerEl;
    let titleRowEl;
    let subtitleEl;
    let textEl;
    let mediaEl;
    let inputEl;
    let inputIconEl;
    let headerEl;
    let footerEl;
    const slots = self.slots.default;
    const flattenSlots = [];

    if (slots && slots.length) {
      slots.forEach(slot => {
        if (Array.isArray(slot)) flattenSlots.push(...slot);else flattenSlots.push(slot);
      });
    }

    flattenSlots.forEach(child => {
      if (typeof child === 'undefined') return;
      {
        const tag = child.type && (child.type.displayName || child.type.name);

        if (tag === 'F7Input' || tag === 'f7-input') {
          hasInput = true;
          if (child.props && child.props.info) hasInputInfo = true;
          if (child.props && child.props.errorMessage && child.props.errorMessageForce) hasInputErrorMessage = true;

          if (!hasInputValue) {
            if (child.props && (typeof child.props.value === 'undefined' ? child.props.defaultValue || child.props.defaultValue === 0 : child.props.value || child.props.value === 0)) hasInputValue = true;else hasInputValue = false;
          }
        }

        if (tag === 'F7Label' || tag === 'f7-label') {
          if (child.props && child.props.inline) hasInlineLabel = true;
        }
      }
      let slotName;
      slotName = child.props ? child.props.slot : undefined;
      if (!slotName || slotName === 'inner') slotsInner.push(child);
      if (slotName === 'content-start') slotsContentStart.push(child);
      if (slotName === 'content') slotsContent.push(child);
      if (slotName === 'content-end') slotsContentEnd.push(child);
      if (slotName === 'after-start') slotsAfterStart.push(child);
      if (slotName === 'after') slotsAfter.push(child);
      if (slotName === 'after-end') slotsAfterEnd.push(child);
      if (slotName === 'media') slotsMedia.push(child);
      if (slotName === 'inner-start') slotsInnerStart.push(child);
      if (slotName === 'inner-end') slotsInnerEnd.push(child);
      if (slotName === 'before-title') slotsBeforeTitle.push(child);
      if (slotName === 'title') slotsTitle.push(child);
      if (slotName === 'after-title') slotsAfterTitle.push(child);
      if (slotName === 'subtitle') slotsSubtitle.push(child);
      if (slotName === 'text') slotsText.push(child);
      if (slotName === 'header') slotsHeader.push(child);
      if (slotName === 'footer') slotsFooter.push(child);
    });

    if (radio || checkbox) {
      {
        inputEl = React.createElement('input', {
          ref: __reactNode => {
            this.__reactRefs['inputEl'] = __reactNode;
          },
          value: value,
          name: name,
          checked: checked,
          defaultChecked: defaultChecked,
          readOnly: readonly,
          disabled: disabled,
          required: required,
          type: radio ? 'radio' : 'checkbox',
          onChange: this.onChange
        });
      }
      inputIconEl = React.createElement('i', {
        className: `icon icon-${radio ? 'radio' : 'checkbox'}`
      });
    }

    if (media || slotsMedia.length) {
      let mediaImgEl;

      if (media) {
        mediaImgEl = React.createElement('img', {
          src: media
        });
      }

      mediaEl = React.createElement('div', {
        className: 'item-media'
      }, mediaImgEl, slotsMedia);
    }

    const isMedia = mediaItem || mediaList;

    if (header || slotsHeader.length) {
      headerEl = React.createElement('div', {
        className: 'item-header'
      }, header, slotsHeader);
    }

    if (footer || slotsFooter.length) {
      footerEl = React.createElement('div', {
        className: 'item-footer'
      }, footer, slotsFooter);
    }

    if (title || slotsTitle.length || !isMedia && headerEl || !isMedia && footerEl) {
      titleEl = React.createElement('div', {
        className: 'item-title'
      }, !isMedia && headerEl, title, slotsTitle, !isMedia && footerEl);
    }

    if (subtitle || slotsSubtitle.length) {
      subtitleEl = React.createElement('div', {
        className: 'item-subtitle'
      }, subtitle, slotsSubtitle);
    }

    if (text || slotsText.length) {
      textEl = React.createElement('div', {
        className: 'item-text'
      }, text, slotsText);
    }

    if (after || badge || slotsAfter.length) {
      if (after) {
        afterEl = React.createElement('span', null, after);
      }

      if (badge) {
        badgeEl = React.createElement(F7Badge, {
          color: badgeColor
        }, badge);
      }

      afterWrapEl = React.createElement('div', {
        className: 'item-after'
      }, slotsAfterStart, afterEl, badgeEl, slotsAfter, slotsAfterEnd);
    }

    if (isMedia) {
      titleRowEl = React.createElement('div', {
        className: 'item-title-row'
      }, slotsBeforeTitle, titleEl, slotsAfterTitle, afterWrapEl);
      innerEl = React.createElement('div', {
        ref: __reactNode => {
          this.__reactRefs['innerEl'] = __reactNode;
        },
        className: 'item-inner'
      }, slotsInnerStart, headerEl, titleRowEl, subtitleEl, textEl, slotsInner, footerEl, slotsInnerEnd);
    } else {
      innerEl = React.createElement('div', {
        ref: __reactNode => {
          this.__reactRefs['innerEl'] = __reactNode;
        },
        className: 'item-inner'
      }, slotsInnerStart, slotsBeforeTitle, titleEl, slotsAfterTitle, afterWrapEl, slotsInner, slotsInnerEnd);
    }

    const ItemContentTag = checkbox || radio ? 'label' : 'div';
    const classes = Utils.classNames(className, 'item-content', {
      'item-checkbox': checkbox,
      'item-radio': radio,
      'item-input': hasInput,
      'inline-label': hasInlineLabel,
      'item-input-with-info': hasInputInfo,
      'item-input-with-error-message': hasInputErrorMessage,
      'item-input-invalid': hasInputInvalid,
      'item-input-with-value': hasInputValue,
      'item-input-focused': hasInputFocused
    }, Mixins.colorClasses(props));
    return React.createElement(ItemContentTag, {
      ref: __reactNode => {
        this.__reactRefs['el'] = __reactNode;
      },
      id: id,
      style: style,
      className: classes
    }, slotsContentStart, inputEl, inputIconEl, mediaEl, innerEl, slotsContent, slotsContentEnd);
  }

  componentWillUnmount() {
    const self = this;
    const {
      el
    } = self.refs;
    el.removeEventListener('click', self.onClick);
    el.removeEventListener('input:empty', self.onEmpty);
    el.removeEventListener('input:notempty', self.onNotEmpty);
    el.removeEventListener('focus', self.onFocus, true);
    el.removeEventListener('blur', self.onBlur, true);
  }

  componentDidUpdate() {
    const self = this;
    const {
      innerEl
    } = self.refs;
    if (!innerEl) return;
    const $innerEl = self.$$(innerEl);
    const $labelEl = $innerEl.children('.item-title.item-label');
    const $inputWrapEl = $innerEl.children('.item-input-wrap');
    const hasInlineLabel = $labelEl.hasClass('item-label-inline');
    const hasInput = $inputWrapEl.length > 0;
    const hasInputInfo = $inputWrapEl.children('.item-input-info').length > 0;
    const hasInputErrorMessage = $inputWrapEl.children('.item-input-error-message').length > 0;
    const hasInputInvalid = $inputWrapEl.children('.input-invalid').length > 0;

    if (hasInlineLabel !== self.state.hasInlineLabel) {
      self.setState({
        hasInlineLabel
      });
    }

    if (hasInput !== self.state.hasInput) {
      self.setState({
        hasInput
      });
    }

    if (hasInputInfo !== self.state.hasInputInfo) {
      self.setState({
        hasInputInfo
      });
    }

    if (!self.hasInputErrorMessageSet && hasInputErrorMessage !== self.state.hasInputErrorMessage) {
      self.setState({
        hasInputErrorMessage
      });
    }

    if (hasInputInvalid !== self.state.hasInputInvalid) {
      self.setState({
        hasInputInvalid
      });
    }
  }

  componentDidMount() {
    const self = this;
    const {
      innerEl,
      el,
      inputEl
    } = self.refs;
    el.addEventListener('click', self.onClick);
    if (!innerEl) return;
    const $innerEl = self.$$(innerEl);
    const $labelEl = $innerEl.children('.item-title.item-label');
    const $inputWrapEl = $innerEl.children('.item-input-wrap');
    const hasInlineLabel = $labelEl.hasClass('item-label-inline');
    const hasInput = $inputWrapEl.length > 0;
    const hasInputInfo = $inputWrapEl.children('.item-input-info').length > 0;
    const hasInputErrorMessage = $inputWrapEl.children('.item-input-error-message').length > 0;
    const hasInputInvalid = $inputWrapEl.children('.input-invalid').length > 0;

    if (hasInput) {
      el.addEventListener('focus', self.onFocus, true);
      el.addEventListener('blur', self.onBlur, true);
      el.addEventListener('input:empty', self.onEmpty);
      el.addEventListener('input:notempty', self.onNotEmpty);
    }

    if (!self.hasInlineLabelSet && hasInlineLabel !== self.state.hasInlineLabel) {
      self.setState({
        hasInlineLabel
      });
    }

    if (!self.hasInputSet && hasInput !== self.state.hasInput) {
      self.setState({
        hasInput
      });
    }

    if (!self.hasInputInfoSet && hasInputInfo !== self.state.hasInputInfo) {
      self.setState({
        hasInputInfo
      });
    }

    if (!self.hasInputErrorMessageSet && hasInputErrorMessage !== self.state.hasInputErrorMessage) {
      self.setState({
        hasInputErrorMessage
      });
    }

    if (!self.hasInputInvalidSet && hasInputInvalid !== self.state.hasInputInvalid) {
      self.setState({
        hasInputInvalid
      });
    }
  }

  componentWillUpdate() {
    this.checkHasInputState();
  }

  componentWillMount() {
    this.checkHasInputState();
  }

  get slots() {
    return __reactComponentSlots(this.props);
  }

  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }

  get refs() {
    return this.__reactRefs;
  }

  set refs(refs) {}

}

__reactComponentSetProps(F7ListItemContent, Object.assign({
  id: [String, Number],
  className: String,
  style: Object,
  title: [String, Number],
  text: [String, Number],
  media: String,
  subtitle: [String, Number],
  header: [String, Number],
  footer: [String, Number],
  after: [String, Number],
  badge: [String, Number],
  badgeColor: String,
  mediaList: Boolean,
  mediaItem: Boolean,
  itemInput: Boolean,
  itemInputWithInfo: Boolean,
  inlineLabel: Boolean,
  checkbox: Boolean,
  checked: Boolean,
  defaultChecked: Boolean,
  radio: Boolean,
  name: String,
  value: [String, Number, Array],
  readonly: Boolean,
  required: Boolean,
  disabled: Boolean
}, Mixins.colorProps));

F7ListItemContent.displayName = 'f7-list-item-content';
export default F7ListItemContent;