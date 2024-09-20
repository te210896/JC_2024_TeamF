import { Handlers } from "$fresh/server.ts";
import { Client } from "../../../utils/Client.ts";

export const handler: Handlers<Client | null> = {
    async GET(_req, _ctx) {
        const kv = await Deno.openKv("db");
        const clients = await kv.list<Client>({ prefix: ["clients"] });
        return new Response(JSON.stringify(clients));
    },
};
