// THIS FILE WAS AUTOGENERATED
import Domain = require("./Domain");
"use strict";
    
    /**
     * Instances of Event represent structured event records that can be grouped and searched by their properties. Event data item also creates a metric of event count by name.
     */
    class EventData extends Domain
    {
        
        /**
         * Schema version
         */
        public ver: number;
        
        /**
         * Event name. Keep it low cardinality to allow proper grouping and useful metrics.
         */
        public name: string;
        
        /**
         * Collection of custom properties.
         */
        public properties: any;
        
        /**
         * Collection of custom measurements.
         */
        public measurements: any;
        
        constructor()
        {
            super();
            
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
        }
    }
export = EventData;