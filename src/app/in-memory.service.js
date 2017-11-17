"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var MemoryService = (function () {
    function MemoryService() {
    }
    MemoryService.prototype.createDb = function () {
        return {
            shows: [
                {
                    name: 'Romeo and Juliet',
                    description: 'Star-Crossed Lovers',
                    date: 10,
                    id: 1,
                    crew: [
                        {
                            name: 'JimJam Flimflam',
                            email: 'jjflam@hotmail.com',
                            phoneNumber: '333-333-3331',
                            role: 'Cast'
                        },
                        {
                            name: 'Michael Scott',
                            email: 'mscott@dunder.com',
                            phoneNumber: '123-456-7890',
                            role: 'Crew'
                        }
                    ],
                    cue: [
                        {
                            name: "Lights on",
                            type: "Lights",
                            actionCall: "When Jeff walks on stage",
                            called: true
                        },
                        {
                            name: "Punch sound effect",
                            type: "Sound",
                            actionCall: "When Jeff gets punched",
                            called: false
                        }
                    ]
                },
                {
                    name: 'Hamlet',
                    description: 'A Shakespeare Product',
                    date: 11,
                    id: 2,
                    crew: [
                        {
                            name: 'Jim Flim',
                            email: 'jflam@hotmail.com',
                            phoneNumber: '333-333-3331',
                            role: 'Lead Actor'
                        },
                        {
                            name: 'Mike Scott',
                            email: 'mscott@dunder.com',
                            phoneNumber: '123-456-7890',
                            role: 'Stage Manager'
                        }
                    ],
                    cue: [
                        {
                            name: "Lights off",
                            type: "Lights",
                            actionCall: "When Hamlet walks off stage",
                            called: true
                        },
                        {
                            name: "Sword sound effect",
                            type: "Sound",
                            actionCall: "When Hamlet swings the sword",
                            called: false
                        }
                    ]
                }
            ]
        };
    };
    return MemoryService;
}());
exports.MemoryService = MemoryService;
//# sourceMappingURL=in-memory.service.js.map