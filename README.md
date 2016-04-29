# FIX-Parser
==============


FIX() is a liteweight library for parsing and manipulating FIX protocol based messages.
--------------

*Basic Usage:*


    <script type="text/javascript" src="fix.js"></script>
    <script type="text/javascript" src="fix.4.1.js"></script>
    <script>

      MyFix = FIX({
        version:'4.1',
        delimitter : '|'
      });

    </script>

FIX functions creates an instance with the specified configuration.
Parameters:JSON

version: String - FIX protocol version - Default: '4.4'
delimitter: String - Message delimetter - Default: '\x01'
Methods:

.translateToJSON(FIXstring) - Translates a FIX string to Object Literal
(e.g. - 44=1.234 becomes { Price:1.234 } )

.translateJSONToFIX(JSONobject) - Opposite to translateToJSON method. Converts translated Object to fix message
(e.g. - { Price:1.234 } becomes 44=1.234 ).

    .toJSON(FIXstring) - Converts Fix string to Object Literal.

    .parse(FIXstring) - Refference to toJSON method.

    .toURI(FIXstring) - Converts Fix string to URI String

    .toJSONString(FIXstring) - Converts Fix string to JSON String

    .JSONtoFIX(JSONobject) - Converts Object Literal to Fix string

*Examples:*


    var msg = MyFix.parse('28=N|55=SPMI.MI|54=2|27=200000');
    // returns a Object Literal;

var js = MyFix.translateToJSON('28=N|55=SPMI.MI|54=2|27=200000');


*Create New Methods:*



    FIX.add.MyNewMethod = function(){

    }

MyFix.MyNewMethod();


*Versions:*

Currently versions 4.1, 4.4, 5.0 are added FIX Specifications

*Compatibility:*

FIX is supported by all major browsers and Node.js