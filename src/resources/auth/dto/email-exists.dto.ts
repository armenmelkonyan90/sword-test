import { IEmailExists } from "@common/models";

import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class EmailExistsDTO implements IEmailExists {
    @IsBoolean()
    @ApiProperty()
    emailExists: boolean;
}
