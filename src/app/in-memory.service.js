"use strict";
var InMemoryService = (function () {
    function InMemoryService() {
    }
    InMemoryService.prototype.createDb = function () {
        var shows = [
            {
                name: 'Romeo & Juliet',
                description: 'Star-Crossed Lovers',
                date: 10,
                id: 1
            },
            {
                name: 'Hamlet',
                description: 'A Shakespeare Product',
                date: 11,
                id: 2
            }
        ];
        return { shows: shows };
    };
    return InMemoryService;
}());
exports.InMemoryService = InMemoryService;
//# sourceMappingURL=in-memory.service.js.map