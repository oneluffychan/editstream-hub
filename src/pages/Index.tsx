import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Users, Zap, Globe, ArrowRight, Plus } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8);
    navigate(`/editor/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      navigate(`/editor/${roomId}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">CodeTogether</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
              How it works
            </a>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="CodeTogether Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Code
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Together</span>
                  <br />
                  in Real-Time
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Collaborate on code with your team in real-time. Share ideas, debug together, 
                  and build amazing projects without the friction of traditional tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleCreateRoom}
                  className="text-lg"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Create Room
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Code Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            {/* Room Creation Card */}
            <div className="relative">
              <Card className="bg-gradient-card border-border shadow-accent">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">Start Coding Together</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Create a new room or join an existing one
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Button 
                      onClick={handleCreateRoom}
                      className="w-full"
                      variant="cta"
                      size="lg"
                    >
                      <Plus className="mr-2 h-5 w-5" />
                      Create New Room
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomId" className="text-foreground">Room ID</Label>
                      <Input
                        id="roomId"
                        placeholder="Enter room ID..."
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        className="bg-background border-border"
                        onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
                      />
                    </div>
                    <Button 
                      onClick={handleJoinRoom}
                      className="w-full"
                      variant="outline"
                      size="lg"
                      disabled={!roomId.trim()}
                    >
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Join Room
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Everything you need to code together
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers who value collaboration, speed, and simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-primary transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Real-time Sync</CardTitle>
                <CardDescription className="text-muted-foreground">
                  See changes instantly as your team types. No lag, no conflicts, just smooth collaboration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-primary transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Multi-user Support</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Collaborate with unlimited team members. See live cursors and user presence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-primary transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Language Support</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Full syntax highlighting and autocomplete for 50+ programming languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Get started in seconds
            </h3>
            <p className="text-xl text-muted-foreground">
              No signup required. Just create a room and start coding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                1
              </div>
              <h4 className="text-xl font-semibold text-foreground">Create or Join</h4>
              <p className="text-muted-foreground">
                Click "Create Room" or enter a room ID to join an existing session
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                2
              </div>
              <h4 className="text-xl font-semibold text-foreground">Share & Invite</h4>
              <p className="text-muted-foreground">
                Share the room ID with your team members to invite them to collaborate
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                3
              </div>
              <h4 className="text-xl font-semibold text-foreground">Code Together</h4>
              <p className="text-muted-foreground">
                Start coding! See real-time changes, cursors, and collaborate seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-foreground font-semibold">CodeTogether</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ for developers who love to collaborate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;