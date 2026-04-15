# Directive: Setup Supabase CLI

## Goal
Install the Supabase CLI and authenticate with a Supabase account.

## Inputs
- None (Global installation)

## Tools/Scripts
1. `execution/install_supabase.py`: Installs Supabase CLI via npm.
2. `supabase login`: Manual step or token-based.

## Steps
1. Run `execution/install_supabase.py` to install the CLI as a local dev dependency. (Completed: version 2.91.1)
2. Verify installation with `npx supabase --version`. (Completed)
3. Login and Link to Supabase.
   - User ran `npx supabase login` (Completed).
   - Local directory initialized with `npx supabase init` (Completed).
   - Linked to project `HeardChef app` (ref: `gqqjtfpekdryvunsdzlq`) (Completed).

## Learned Information
- Global `npm install -g supabase` is not supported on Windows.
- Local installation via `npm install supabase --save-dev` is the recommended path when Scoop is not available.
- `npx supabase` is used to run the local binary.
