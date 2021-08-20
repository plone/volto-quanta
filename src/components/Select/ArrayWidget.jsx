/**
 * ArrayWidget component.
 * @module components/manage/Widgets/ArrayWidget
 */

import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { isObject, intersection } from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  getVocabFromHint,
  getVocabFromField,
  getVocabFromItems,
} from '@plone/volto/helpers';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import { getVocabulary } from '@plone/volto/actions';

import {
  ClearIndicator,
  customSelectStyles,
  DropdownIndicator,
  MultiValueRemove,
  Option,
  SelectContainer,
  selectTheme,
} from './SelectStyling';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  select: {
    id: 'Select…',
    defaultMessage: 'Select…',
  },
  no_value: {
    id: 'No value',
    defaultMessage: 'No value',
  },
  no_options: {
    id: 'No options',
    defaultMessage: 'No options',
  },
});

/**
 * ArrayWidget component class.
 * @class ArrayWidget
 * @extends Component
 */
class ArrayWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string),
    getVocabulary: PropTypes.func.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    ),
    loading: PropTypes.bool,
    items: PropTypes.shape({
      vocabulary: PropTypes.object,
    }),
    widgetOptions: PropTypes.shape({
      vocabulary: PropTypes.object,
    }),
    value: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    ),
    onChange: PropTypes.func.isRequired,
    itemsTotal: PropTypes.number,
    wrapped: PropTypes.bool,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    description: null,
    required: false,
    items: {
      vocabulary: null,
    },
    widgetOptions: {
      vocabulary: null,
    },
    error: [],
    choices: [],
    loading: false,
    value: null,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.vocabBaseUrl =
      getVocabFromHint(props) ||
      getVocabFromField(props) ||
      getVocabFromItems(props);
    this.state = {
      search: '',
      selectedOption: props.value
        ? props.value.map((item) =>
            isObject(item)
              ? { label: item.title || item.token, value: item.token }
              : { label: item, value: item },
          )
        : [],
    };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (
      !this.props.items?.choices &&
      !this.props.choices &&
      this.vocabBaseUrl
    ) {
      this.props.getVocabulary(this.vocabBaseUrl);
    }
  }

  /**
   * Initiate search with new query
   * @param {string} query Search query.
   * @returns {undefined}
   */
  search(query) {
    if (query.length > 1) {
      this.props.getVocabulary(this.vocabBaseUrl, query);
    }
  }

  /**
   * Initiate search with new query
   * @method loadOptions
   * @param {string} search Search query.
   * @param {string} previousOptions The previous options rendered.
   * @param {string} additional Additional arguments to pass to the next loadOptions.
   * @returns {undefined}
   */
  loadOptions = (search, previousOptions, additional) => {
    let hasMore = this.props.itemsTotal > previousOptions.length;
    const offset = this.state.search !== search ? 0 : additional.offset;
    this.setState({ search });

    if (hasMore || this.state.search !== search) {
      this.props.getVocabulary(this.props.vocabBaseUrl, search, offset);

      return {
        options:
          intersection(previousOptions, this.props.choices).length ===
          this.props.choices.length
            ? []
            : this.props.choices,
        hasMore: hasMore,
        additional: {
          offset: offset === additional.offset ? offset + 25 : offset,
        },
      };
    }
    // We should return always an object like this, if not it complains:
    return { options: [] };
  };

  /**
   * Handle the field change, store it in the local state and back to simple
   * array of tokens for correct serialization
   * @method handleChange
   * @param {array} selectedOption The selected options (already aggregated).
   * @returns {undefined}
   */
  handleChange(selectedOption) {
    this.setState({ selectedOption });

    this.props.onChange(
      this.props.id,
      selectedOption ? selectedOption.map((item) => item.value) : null,
    );
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { id, required } = this.props;
    const { selectedOption } = this.state;
    const disabled = this.props.disabled || this.props.isDisabled;
    const CreatableSelect = this.props.reactSelectCreateable.default;
    const AsyncPaginate = this.props.reactSelectAsyncPaginate.AsyncPaginate;

    return (
      <FormFieldWrapper {...this.props}>
        {!this.props.items?.choices && this.vocabBaseUrl ? (
          <AsyncPaginate
            aria-labelledby={`field-label-${id}`}
            aria-describedby={`field-hint-${id}`}
            isDisabled={disabled}
            className="q react-select-container"
            classNamePrefix="react-select"
            options={this.props.choices || []}
            styles={customSelectStyles}
            theme={selectTheme}
            components={{
              ClearIndicator,
              DropdownIndicator,
              MultiValueRemove,
              Option,
              SelectContainer,
            }}
            hasError={this.props.error || null}
            isMulti
            value={selectedOption || []}
            loadOptions={this.loadOptions}
            onChange={this.handleChange}
            additional={{
              offset: 25,
            }}
            placeholder={this.props.placeholder || null}
            noOptionsMessage={() =>
              this.props.intl.formatMessage(messages.no_options)
            }
          />
        ) : (
          <CreatableSelect
            aria-labelledby={`field-label-${id}`}
            aria-describedby={`field-hint-${id}`}
            className="q react-select-container"
            classNamePrefix="react-select"
            options={
              this.props.choices
                ? [
                    ...this.props.choices.map((option) => ({
                      value: option[0],
                      label:
                        // Fix "None" on the serializer, to remove when fixed in p.restapi
                        option[1] !== 'None' && option[1]
                          ? option[1]
                          : option[0],
                    })),
                    // This should go, it's a users and grups specific use case
                    // https://github.com/plone/volto/commit/0f584272b0634b6896f982a07eb99f8e61300944
                    // {
                    //   label: this.props.intl.formatMessage(messages.no_value),
                    //   value: 'no-value',
                    // },
                  ]
                : [
                    {
                      label: this.props.intl.formatMessage(messages.no_value),
                      value: 'no-value',
                    },
                  ]
            }
            styles={customSelectStyles}
            isDisabled={disabled}
            theme={selectTheme}
            components={{
              ClearIndicator,
              DropdownIndicator,
              MultiValueRemove,
              Option,
              SelectContainer,
            }}
            hasError={this.props.error || null}
            value={selectedOption || []}
            placeholder={this.props.placeholder || null}
            onChange={this.handleChange}
            isMulti
          />
        )}
        <input
          className="q input"
          tabIndex={-1}
          hidden
          autoComplete="off"
          required={required}
          placeholder="Dummy"
        />
      </FormFieldWrapper>
    );
  }
}

export const ArrayWidgetComponent = injectIntl(ArrayWidget);

export default compose(
  injectIntl,
  injectLazyLibs(['reactSelectCreateable', 'reactSelectAsyncPaginate']),
  connect(
    (state, props) => {
      const vocabBaseUrl =
        getVocabFromHint(props) ||
        getVocabFromField(props) ||
        getVocabFromItems(props);
      const vocabState = state.vocabularies[vocabBaseUrl];
      // If the schema already has the choices in it, then do not try to get the vocab,
      // even if there is one
      if (props.items?.choices) {
        return {
          choices: props.items.choices,
        };
      } else if (vocabState) {
        return {
          choices: vocabState.items,
          itemsTotal: vocabState.itemsTotal,
          loading: Boolean(vocabState.loading),
        };
      }
      return {};
    },
    { getVocabulary },
  ),
)(ArrayWidget);
