"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { hasNewsletterCookie } from "@/lib/newsletter-cookie";
import { NewsletterGateModal } from "./newsletter-gate-modal";

interface AudioPlayerProps {
  src: string;
  title?: string;
  postSlug?: string;
}

export function AudioPlayer({
  src,
  title = "Ouvir o artigo",
  postSlug,
}: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(true);

  // Verificar cookie no mount
  React.useEffect(() => {
    setIsSubscribed(hasNewsletterCookie());
    setIsChecking(false);
  }, []);

  // Format time (seconds -> mm:ss)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const togglePlay = () => {
    // Verificar se está inscrito
    if (!isSubscribed) {
      setShowModal(true);
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubscribeSuccess = () => {
    setIsSubscribed(true);
    // Iniciar reprodução automaticamente após inscrição
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 500);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Reset icon when audio ends
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <>
      <Card className="p-4 my-8 bg-muted/30 border shadow-sm relative">
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                {isPlaying ? (
                  <Volume2 className="h-5 w-5 text-primary" />
                ) : (
                  <div className="relative">
                    <Play className="h-5 w-5 text-primary" />
                    {!isSubscribed && !isChecking && (
                      <Lock className="absolute -top-1 -right-1 h-2.5 w-2.5 text-primary fill-background" />
                    )}
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-none">{title}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {isSubscribed ? "Ouça este artigo" : "Inscreva-se para ouvir"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <div className="relative">
                  <Play className="h-5 w-5 fill-current" />
                  {!isSubscribed && !isChecking && (
                    <Lock className="absolute -top-1 -right-1 h-2.5 w-2.5 text-primary fill-background" />
                  )}
                </div>
              )}
            </Button>

            <span className="text-xs text-muted-foreground w-10 text-right font-mono">
              {formatTime(currentTime)}
            </span>

            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="flex-1"
            />

            <span className="text-xs text-muted-foreground w-10 font-mono">
              {formatTime(duration)}
            </span>

            <div className="flex items-center gap-2 group relative">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-muted-foreground"
                onClick={toggleMute}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <NewsletterGateModal
        open={showModal}
        onOpenChange={setShowModal}
        onSuccess={handleSubscribeSuccess}
        source={postSlug || "blog-audio-player"}
        contentType="audio"
      />
    </>
  );
}
