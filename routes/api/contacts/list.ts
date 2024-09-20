import { Handlers } from "$fresh/server.ts";
import { Contact } from "../../../utils/Contact.ts";

export const handler: Handlers<Contact | null> = {
    async GET(_req, _ctx) {
        const kv = await Deno.openKv("db");
        const contacts = await kv.list<Contact>({ prefix: ["contacts"]});
        return new Response(JSON.stringify(contacts));
    },
};
