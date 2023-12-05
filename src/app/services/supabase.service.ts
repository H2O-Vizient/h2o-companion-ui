import {Injectable} from '@angular/core';
import {
  AuthChangeEvent, AuthResponse,
  AuthSession,
  AuthTokenResponse,
  createClient,
  Session,
  SupabaseClient,
  User
} from '@supabase/supabase-js';
import {environment} from '../../environments/environment';
import {SignInRequest} from '../models/sign-in-request';
import {SignUpRequest} from "../models/sign-up-request";

export interface Profile {
    id?: string
    username: string
    website: string
    avatar_url: string
}

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase: SupabaseClient;
    _session: AuthSession | null = null;

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }

    get session() {
        this.supabase.auth.getSession().then(({data}) => {
            this._session = data.session
        })
        return this._session
    }

    profile(user: User) {
        return this.supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
        return this.supabase.auth.onAuthStateChange(callback)
    }

    signIn(request: SignInRequest): Promise<AuthTokenResponse> {
        return this.supabase.auth.signInWithPassword({email: request.email, password: request.password});
    }

    signUp(request: SignUpRequest): Promise<AuthResponse> {
        return this.supabase.auth.signUp({email: request.email, password: request.password});
    }

    signOut() {
        return this.supabase.auth.signOut()
    }

    resetPassword(userEmail: string) {
      return this.supabase.auth.resetPasswordForEmail(userEmail);
    }

    updatePassword(newPassword: string) {
      return this.supabase.auth.updateUser({password: newPassword});
    }

    async getData() {
      const {data} = await this.supabase.from('events').select('*');
      // const {data} = await this.supabase.from('events').select('metadata->date');

      // Just console logging for now until the events page is ready
      console.log(data);
    }

    // Commented these methods out because I think they're from a tutorial and not needed for our project specifically

    // updateProfile(profile: Profile) {
    //     const update = {
    //         ...profile,
    //         updated_at: new Date(),
    //     }
    //
    //     return this.supabase.from('profiles').upsert(update)
    // }
    // downLoadImage(path: string) {
    //     return this.supabase.storage.from('avatars').download(path)
    // }
    //
    // uploadAvatar(filePath: string, file: File) {
    //     return this.supabase.storage.from('avatars').upload(filePath, file)
    // }
}
