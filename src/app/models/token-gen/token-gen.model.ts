export class TokenGen {
    accessToken: string;
    tokenType: string;

    constructor(accessToken: string, tokenType: string) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
    }
}

export class TokenGenDto {
    access_token: string;
    token_type: string;

    constructor(access_token: string, token_type: string) {
        this.access_token = access_token;
        this.token_type = token_type;
    }
}
