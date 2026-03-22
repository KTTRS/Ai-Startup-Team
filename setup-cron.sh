#!/bin/bash
# Set up system cron jobs to run SAINTE agents automatically
# Run this ONCE to install: ./scripts/setup-cron.sh
# This persists across Claude Code sessions and computer restarts.

SAINTE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUNNER="$SAINTE_DIR/scripts/run-all-agents.sh"
EA_RUNNER="$SAINTE_DIR/scripts/run-agent.sh"
LOG_DIR="$SAINTE_DIR/workspace/logs"

mkdir -p "$LOG_DIR"

# Make scripts executable
chmod +x "$SAINTE_DIR/scripts/run-agent.sh"
chmod +x "$SAINTE_DIR/scripts/run-all-agents.sh"
chmod +x "$SAINTE_DIR/scripts/setup-cron.sh"

echo "Setting up SAINTE autonomous agent cron jobs..."
echo "Project: $SAINTE_DIR"
echo ""

# Get current crontab, strip any existing SAINTE entries
CURRENT_CRON=$(crontab -l 2>/dev/null | grep -v "SAINTE" | grep -v "run-all-agents" | grep -v "run-agent")

NEW_CRON="$CURRENT_CRON

# ============================================================
# SAINTE Autonomous Agent Team — Jordan Pierce (EA) every 30min
# ============================================================

# Jordan Pierce (EA) — every 30 minutes, all day
# Handles incoming emails, agent requests, speaking engagements, contracts
*/30 * * * * cd $SAINTE_DIR && bash $EA_RUNNER 02-ea >> $LOG_DIR/jordan-$(date +\%H\%M).log 2>&1

# ============================================================
# SAINTE Autonomous Agent Team — 6x Daily Full Team Schedule
# ============================================================

# Run 1: 2:03 AM — Overnight deep work session (all 18 agents)
3 2 * * * cd $SAINTE_DIR && bash $RUNNER --sequential >> $LOG_DIR/cron-run1-overnight.log 2>&1

# Run 2: 6:55 AM — EA extra morning briefing prep (before team run)
55 6 * * * cd $SAINTE_DIR && bash $EA_RUNNER 02-ea >> $LOG_DIR/cron-run2-ea.log 2>&1

# Run 3: 7:07 AM — Morning full run (all 18 agents, parallel for speed)
7 7 * * * cd $SAINTE_DIR && bash $RUNNER --parallel >> $LOG_DIR/cron-run3-morning.log 2>&1

# Run 4: 12:13 PM — Midday full run (all 18 agents)
13 12 * * * cd $SAINTE_DIR && bash $RUNNER --parallel >> $LOG_DIR/cron-run4-midday.log 2>&1

# Run 5: 5:17 PM — Afternoon full run (all 18 agents)
17 17 * * * cd $SAINTE_DIR && bash $RUNNER --parallel >> $LOG_DIR/cron-run5-afternoon.log 2>&1

# Run 6: 10:09 PM — Evening full run (all 18 agents)
9 22 * * * cd $SAINTE_DIR && bash $RUNNER --parallel >> $LOG_DIR/cron-run6-evening.log 2>&1
"

# Install
echo "$NEW_CRON" | crontab -

echo "Cron jobs installed!"
echo ""
echo "Schedule:"
echo "  Every 30 min — Jordan Pierce (EA) checks for emails, agent requests, comms"
echo "  2:03 AM      — Overnight deep work (all 18, sequential)"
echo "  6:55 AM      — Jordan extra morning briefing"
echo "  7:07 AM      — Morning run (all 18, parallel)"
echo "  12:13 PM     — Midday run (all 18, parallel)"
echo "  5:17 PM      — Afternoon run (all 18, parallel)"
echo "  10:09 PM     — Evening run (all 18, parallel)"
echo ""
echo "Logs: $LOG_DIR/"
echo ""
echo "To view jobs:   crontab -l"
echo "To remove all:  crontab -l | grep -v SAINTE | grep -v run-agent | grep -v run-all-agents | crontab -"
echo "To run now:     bash $RUNNER --parallel"
