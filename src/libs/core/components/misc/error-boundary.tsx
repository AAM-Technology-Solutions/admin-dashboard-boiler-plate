import { Box, Typography } from "@mui/material";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexGrow={1}
          alignItems="center"
          justifyContent="center"
          height={"100vh"}
        >
          <Box
            maxWidth="400px"
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <img src="/assets/robot.svg" width="150px" alt="page not found" />
            <Typography variant="h3">Unexpected error!</Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              Sorry, unexpected error happenned! Please refresh the page or try
              again later.
            </Typography>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
