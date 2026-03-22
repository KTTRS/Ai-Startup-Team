#!/bin/bash
# Run a single SAINTE agent
# Usage: ./scripts/run-agent.sh 01-ceo
# Usage: ./scripts/run-agent.sh 09-head-of-sales

AGENT=$1
SAINTE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
LOG_DIR="$SAINTE_DIR/workspace/logs"

mkdir -p "$LOG_DIR"

if [ -z "$AGENT" ]; then
  echo "Usage: $0 <agent-name>"
  echo ""
  echo "Available agents:"
  echo "  01-ceo                       CEO / Founder"
  echo "  02-ea                        Executive Assistant"
  echo "  03-cto                       CTO / Technical Co-Founder"
  echo "  04-ai-ml-engineer            AI/ML Engineer"
  echo "  05-fullstack-engineer        Full-Stack Engineer"
  echo "  06-product-conversation-designer  Product & Conversation Designer"
  echo "  07-brand-designer            Brand Designer"
  echo "  08-behavioral-neuroscientist Behavioral Neuroscientist"
  echo "  09-head-of-sales             Head of Sales"
  echo "  10-ops-finance               Operations & Finance"
  echo "  11-community-culture         Community & Culture"
  echo "  12-ai-ethics                 AI Ethics"
  echo "  advisor-a-fqhc-mco          Advisor A: FQHC/MCO"
  echo "  advisor-b-public-health     Advisor B: Public Health"
  echo "  advisor-c-neuroscience      Advisor C: Neuroscience"
  echo "  advisor-d-ai-technical      Advisor D: AI/Technical"
  echo "  advisor-e-cultural          Advisor E: Cultural"
  echo "  advisor-f-legal             Advisor F: Legal"
  exit 1
fi

PROMPT_FILE="$SAINTE_DIR/scripts/prompts/$AGENT.md"

if [ ! -f "$PROMPT_FILE" ]; then
  echo "ERROR: No prompt file found: $PROMPT_FILE"
  exit 1
fi

echo "[$DATE $TIME] Starting agent: $AGENT" | tee -a "$LOG_DIR/agent-runs.log"

# Build full prompt: shared context + OS rules + agent-specific prompt
# Replace {{DATE}} placeholder with actual date
FULL_PROMPT="$(cat "$SAINTE_DIR/scripts/context/company.md")

$(cat "$SAINTE_DIR/scripts/context/os.md")

$(sed "s/{{DATE}}/$DATE/g" "$PROMPT_FILE")

---
CURRENT DATE: $DATE
WORKSPACE ROOT: $SAINTE_DIR/workspace/

IMPORTANT: You have full file system access. Use the Read tool to check what's already been produced in your workspace folder before deciding what to create. Use the Write tool to save your output. File everything in the correct workspace subfolder with the correct naming convention. Produce REAL content — not placeholders, not templates, not outlines. Actual usable documents that another person could act on immediately."

# Run the agent with full permissions
claude --dangerously-skip-permissions -p "$FULL_PROMPT" \
  2>> "$LOG_DIR/$AGENT-errors-$DATE.log" \
  | tee -a "$LOG_DIR/$AGENT-output-$DATE.log"

EXIT_CODE=$?
DONE_TIME=$(date +%H:%M:%S)

echo "[$DATE $DONE_TIME] Agent $AGENT completed (exit: $EXIT_CODE)" | tee -a "$LOG_DIR/agent-runs.log"
exit $EXIT_CODE
