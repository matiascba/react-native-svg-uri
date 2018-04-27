// Type definitions for react-native-svg-uri 1.1.2
// Project: https://github.com/matc4/react-native-svg-uri
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React, { Component } from 'react'
import { ImageURISource } from 'react-native'

interface SvgUriProps {
    /**
     * The width of the rendered svg
     */
    width?: number | string

    /**
     * The height of the rendered svg
     */
    height?: number | string

    /**
     * Source path for the .svg file
     * Expects a require('path') to the file or object with uri.
     * e.g. source={require('my-path')}
     * e.g. source={{ur: 'my-path'}}
     */
    source?: ImageURISource

    /**
     * Direct svg code to render. Similar to inline svg
     */
    svgXmlData?: string

    /**
     * Fill color for the svg object
     */
    fill?: string

    /**
     * Fill the entire svg element with same color
     */
    fillAll?: boolean

    /**
     * The viewBox attribute allows you to specify that a given
     * set of graphics stretch to fit a particular container element
     * e.g. viewBox={'0 0 24 24'} to fit 24x24 square
     */
    viewBox?: string
}

export default class SvgUri extends Component<SvgUriProps, {}> { }
