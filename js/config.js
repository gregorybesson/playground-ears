/**
 * this is the main application file, which one that init project bind event, etc...
 * Copyright (C) 2013 - Adfab - nicolas labbé 
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/** Never call this constant by NS
 * @constant Adfab 
 */
var Adfab = Adfab || {},

	/**
	 * @namespace reference to Adfab.Playground object
	 */
    NS = {},

	/** Application settings, need to be fill by partner
	 * @constant _plgd_settings 
	 */
    _plgd_settings = _plgd_settings || {},
    
	/** Application config, need to be fill by developper
	 * @constant pl_config 
	 */
    pl_config = {
        debug: true,
        url: 'localhost/Dropbox/work/playground/',
        ns: 'Adfab.playground'
    };