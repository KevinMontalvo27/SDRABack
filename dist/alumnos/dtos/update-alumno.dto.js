"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlumnoDto = void 0;
const create_alumno_dto_1 = require("./create-alumno.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateAlumnoDto extends (0, swagger_1.PartialType)(create_alumno_dto_1.CreateAlumnoDto) {
}
exports.UpdateAlumnoDto = UpdateAlumnoDto;
//# sourceMappingURL=update-alumno.dto.js.map