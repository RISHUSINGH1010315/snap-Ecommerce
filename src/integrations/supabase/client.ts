// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xnwredecgemijscihpaw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhud3JlZGVjZ2VtaWpzY2locGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MTE5MDUsImV4cCI6MjA2MDI4NzkwNX0.gE9gOajmJhD21jQcujC5dTNYsVEQaIWlILtfq87-qKQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);