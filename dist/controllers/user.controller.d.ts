/// <reference types="express" />
import { RequestWithSession, Response } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { UserRepository } from '../repositories';
import { UserCredentialsRepository } from '../repositories/user-credentials.repository';
import { UserIdentityRepository } from '../repositories/user-identity.repository';
export type Credentials = {
    email: string;
    password: string;
    name: string;
};
export declare class UserLoginController {
    userRepository: UserRepository;
    userCredentialsRepository: UserCredentialsRepository;
    userIdentityRepository: UserIdentityRepository;
    constructor(userRepository: UserRepository, userCredentialsRepository: UserCredentialsRepository, userIdentityRepository: UserIdentityRepository);
    signup(credentials: Credentials, response: Response): Promise<Response<any, Record<string, any>>>;
    login(credentials: Credentials, user: UserProfile, request: RequestWithSession, response: Response): Promise<Response<any, Record<string, any>>>;
    /**
     * TODO: enable roles and authorization, add admin role authorization to this endpoint
     */
    clear(): Promise<void>;
    getExternalProfiles(profile: UserProfile): Promise<import("../models").UserIdentity[] | undefined>;
}
