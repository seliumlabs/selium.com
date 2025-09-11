"use client";

import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { rust } from "@codemirror/lang-rust";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

const code = `
async fn echo(mut server: RpcServer<SimpleReq, SimpleReq>) -> Result<()> {
    while let Some(client) = server.listen().await {
        let req = client.request(); // returns client's SimpleReq

        // You can use your preferred logging subsystem, or just print to stdout/stderr.
        // Selium will publish these logs to "sel://selium.com/demo/<your_proj>/.log:info"
        info!("Received request: {}", req.0);

        if let Err(e) = client.reply(req).await {
            error!("Could not send reply: {e}");
        }
    }

    if let Ok(request) = input.recv().await {
        let reply = EchoMsg::new(request.msg);
        output.send(&reply).await?;
    }

    Ok(())
}
`.trim();

export default function Editor() {
  return <CodeMirror value={code} extensions={[rust()]} theme={tokyoNight} />;
}
