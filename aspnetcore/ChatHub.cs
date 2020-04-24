using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetcore
{
    public class ChatHub : Hub
    {
        public async Task Messages(string nick,string message)
        {
            await Clients.All.SendAsync("messages", nick,message);
        }
    }
}
