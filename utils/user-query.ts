export async function createUser(id: number) {
    const kv = await Deno.openKv("db");
    const key = ["user", id];
    const user = (await kv.get<User>(key)).value!;
    return new Response(JSON.stringify(user));
}