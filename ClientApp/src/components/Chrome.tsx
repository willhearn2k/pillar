import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import Styles from './Chrome-css';

interface ChromeProps {
	children: React.ReactNode;
}

export const Chrome: React.SFC<ChromeProps> = ({ children }) => {
	const classes = Styles();
  	const theme = useTheme();
  	const [open, setOpen] = React.useState(false);

  	const handleDrawerOpen = () => {
    	setOpen(true);
  	};

  	const handleDrawerClose = () => {
    	setOpen(false);
  	};

  	return (
    	<div className={classes.root}>
      		<CssBaseline />
      		<AppBar
        		position="fixed"
        		className={clsx(classes.appBar, {
          			[classes.appBarShift]: open,
        		})}
      		>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Pillar
					</Typography>
				</Toolbar>
		</AppBar>
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
			paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
			<IconButton onClick={handleDrawerClose}>
				{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
			</IconButton>
			</div>
			<Divider />
			<List>
			<ListItem button key={"Dashboard"} component={Link} to='/'>
				<ListItemIcon>{<InboxIcon />} </ListItemIcon>
				<ListItemText primary={"Dashboard"} />
			</ListItem>
			<ListItem button key={"Players"} component={Link} to='/counter'>
				<ListItemIcon>{<InboxIcon />} </ListItemIcon>
				<ListItemText primary={"Players"} />
			</ListItem>
			<ListItem button key={"Fixtures"} component={Link} to='/fetch-data'>
				<ListItemIcon>{<InboxIcon />} </ListItemIcon>
				<ListItemText primary={"Fixtures"} />
			</ListItem>
			</List>
		</Drawer>
			<main
				className={clsx(classes.content, {
				[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				<Container maxWidth="sm">
					<Routes/>
				</Container>
			</main>
    	</div>
  	);
}
