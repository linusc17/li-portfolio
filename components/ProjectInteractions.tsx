"use client";

import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectInteractionsProps {
  projectSlug: string;
  className?: string;
}

interface ProjectStats {
  views: number;
  hearts: number;
  lastUpdated: string;
}

export interface ProjectInteractionsRef {
  incrementView: () => Promise<void>;
}

export const ProjectInteractions = forwardRef<
  ProjectInteractionsRef,
  ProjectInteractionsProps
>(({ projectSlug, className = "" }, ref) => {
  const [stats, setStats] = useState<ProjectStats>({
    views: 0,
    hearts: 0,
    lastUpdated: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isHeartLoading, setIsHeartLoading] = useState(false);
  const [heartAnimating, setHeartAnimating] = useState(false);

  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch("/api/projects/stats");
      const data = await response.json();

      if (data.success && data.stats[projectSlug]) {
        setStats(data.stats[projectSlug]);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setIsLoading(false);
    }
  }, [projectSlug]);

  const incrementView = async () => {
    const viewedProjects = JSON.parse(localStorage.getItem('viewedProjects') || '[]');

    if (viewedProjects.includes(projectSlug)) return;

    viewedProjects.push(projectSlug);
    localStorage.setItem('viewedProjects', JSON.stringify(viewedProjects));

    try {
      const response = await fetch(`/api/projects/${projectSlug}/view`, {
        method: "POST",
      });

      if (response.ok) {
        fetchStats();
      }
    } catch (error) {
      console.error("Error incrementing view:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [projectSlug, fetchStats]);

  useImperativeHandle(ref, () => ({
    incrementView,
  }));

  const toggleHeart = async () => {
    if (isHeartLoading) return;

    setIsHeartLoading(true);
    setHeartAnimating(true);

    try {
      const response = await fetch(`/api/projects/${projectSlug}/heart`, {
        method: "POST",
      });

      if (response.ok) {
        await fetchStats();
      } else {
        const errorData = await response.json();
        console.log(errorData.error);
      }
    } catch (error) {
      console.error("Error toggling heart:", error);
    } finally {
      setIsHeartLoading(false);
      setTimeout(() => setHeartAnimating(false), 300);
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  if (isLoading) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span className="text-sm">--</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Heart className="h-4 w-4" />
          <span className="text-sm">--</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-1 text-muted-foreground">
        <Eye className="h-4 w-4" />
        <span className="text-sm font-medium">{formatNumber(stats.views)}</span>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={toggleHeart}
        disabled={isHeartLoading}
        className={`flex items-center gap-1 p-1 h-auto text-muted-foreground hover:text-red-500 transition-all duration-200 ${
          heartAnimating ? "scale-110" : "scale-100"
        }`}
      >
        <Heart
          className={`h-4 w-4 transition-all duration-200 ${
            heartAnimating ? "fill-red-500 text-red-500 scale-125" : ""
          }`}
        />
        <span className="text-sm font-medium">
          {formatNumber(stats.hearts)}
        </span>
      </Button>
    </div>
  );
});

ProjectInteractions.displayName = "ProjectInteractions";
