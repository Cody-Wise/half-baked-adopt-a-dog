const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {

    const response = await client
        .from('dogs')
        .select('*');

    return response.body;

    // from the dogs table, select all items

    // and return the response (checking for errors)
    // return checkError(response);    
}

export async function getDog(id) {

    const response = await client
        .from('dogs')
        .select('*')
        .match({ id: id })
        .single();

    // return response.body;

    // from the dogs table, select a single dog who has the matching id

    // and return the response (checking for errors)
    return checkError(response);    
}

export async function searchDogs(name){

    // const response = await client
    //     .from('dogs')
    //     .select('name')
    //     .eq('id', searchQuery)    // Correct
    //     .execute();

    const response = await client
        .from('dogs')
        .select('*')
        .eq('name', name)
        .single();
        // .textSearch('name', searchQuery)

    return checkError(response);

}


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}