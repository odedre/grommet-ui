/** 
 * @description PlatformArchlinux SVG Icon. 
 * @property {string} a11yTitle - Accessibility Title. If not set uses the default title of the status icon.
 * @property {string} colorIndex - The color identifier to use for the stroke color.
 * If not specified, this component will default to muiTheme.palette.textColor.
 * @property {xsmall|small|medium|large|xlarge|huge} size	- The icon size. Defaults to small.
 * @property {boolean} responsive  - Allows you to redefine what the coordinates. 
 * @example 
 * <svg width="24" height="24" ><path d="M11.995499,0 C10.9272763,2.61898783 10.2829772,4.33212022 9.09364861,6.87325951 C9.82285899,7.64621596 10.7179267,8.54636058 12.1714997,9.56299285 C10.6087581,8.91993273 9.54277553,8.27431817 8.74615646,7.60436135 C7.22404876,10.7804724 4.83934636,15.3047005 0,24 C3.8035621,21.8041428 6.75200705,20.4503725 9.49981901,19.9338097 C9.38183641,19.4263273 9.31474077,18.8773854 9.31929729,18.3046251 L9.32381903,18.1827747 C9.38418076,15.7459387 10.6518189,13.8720119 12.1534614,13.9992474 C13.6551031,14.1264836 14.8223099,16.2062608 14.7619552,18.6430989 C14.7506091,19.1016345 14.6988943,19.5427398 14.6085152,19.9518612 C17.3264906,20.483546 20.2434156,21.8338506 23.9955134,24 C23.2556658,22.6379048 22.5952972,21.4100753 21.9646676,20.2406911 C20.9713321,19.4707837 19.9352208,18.4687462 17.8217601,17.3839783 C19.2744348,17.7614433 20.3145182,18.1969375 21.1252451,18.6837145 C14.7134752,6.74608943 14.1942543,5.15982659 11.995499,0 L11.995499,0 Z"/></svg> 
 */
// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-platform-archlinux`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'platform-archlinux');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fillRule="evenodd" d="M11.995499,0 C10.9272763,2.61898783 10.2829772,4.33212022 9.09364861,6.87325951 C9.82285899,7.64621596 10.7179267,8.54636058 12.1714997,9.56299285 C10.6087581,8.91993273 9.54277553,8.27431817 8.74615646,7.60436135 C7.22404876,10.7804724 4.83934636,15.3047005 0,24 C3.8035621,21.8041428 6.75200705,20.4503725 9.49981901,19.9338097 C9.38183641,19.4263273 9.31474077,18.8773854 9.31929729,18.3046251 L9.32381903,18.1827747 C9.38418076,15.7459387 10.6518189,13.8720119 12.1534614,13.9992474 C13.6551031,14.1264836 14.8223099,16.2062608 14.7619552,18.6430989 C14.7506091,19.1016345 14.6988943,19.5427398 14.6085152,19.9518612 C17.3264906,20.483546 20.2434156,21.8338506 23.9955134,24 C23.2556658,22.6379048 22.5952972,21.4100753 21.9646676,20.2406911 C20.9713321,19.4707837 19.9352208,18.4687462 17.8217601,17.3839783 C19.2744348,17.7614433 20.3145182,18.1969375 21.1252451,18.6837145 C14.7134752,6.74608943 14.1942543,5.15982659 11.995499,0 L11.995499,0 Z"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformArchlinux';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

