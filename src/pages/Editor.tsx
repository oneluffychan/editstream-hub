import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Users, Share, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Editor = () => {
  const { roomId } = useParams();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">CodeTogether</span>
            </Link>
            <div className="text-muted-foreground text-sm">
              Room: <span className="font-mono font-semibold text-foreground">{roomId}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Users className="h-4 w-4 mr-2" />
              3 users
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Editor Area */}
        <div className="flex-1 p-4">
          <Card className="h-full bg-code-bg border-code-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">main.js</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  JavaScript
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-full">
              <div className="h-full bg-background/50 rounded-md border border-border p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  {/* Placeholder for Monaco Editor */}
                  <div className="space-y-2">
                    <div className="text-green-400">// Welcome to CodeTogether!</div>
                    <div className="text-blue-400">function <span className="text-yellow-400">greetCollaborators</span>() {`{`}</div>
                    <div className="ml-4 text-white">console.log(<span className="text-green-300">"Hello, team! Ready to code together?"</span>);</div>
                    <div className="text-blue-400">{`}`}</div>
                    <div></div>
                    <div className="text-white">greetCollaborators();</div>
                    <div></div>
                    <div className="text-gray-500">// Start typing to see real-time collaboration...</div>
                    <div className="text-yellow-400 animate-pulse">|</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-border bg-card/30 p-4 space-y-4">
          {/* Connected Users */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground flex items-center gap-2">
                <Users className="h-5 w-5" />
                Connected Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-md bg-primary/10">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-medium text-foreground">You</div>
                  <div className="text-sm text-muted-foreground">Just now</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md bg-accent/10">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div>
                  <div className="font-medium text-foreground">Alice</div>
                  <div className="text-sm text-muted-foreground">Typing...</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-foreground">Bob</div>
                  <div className="text-sm text-muted-foreground">2 min ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Room Info */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground">Room Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Room ID:</span>
                <span className="font-mono text-foreground">{roomId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Language:</span>
                <span className="text-foreground">JavaScript</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created:</span>
                <span className="text-foreground">2 min ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last edit:</span>
                <span className="text-foreground">Now</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                Download Code
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Reset Document
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Change Language
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Editor;