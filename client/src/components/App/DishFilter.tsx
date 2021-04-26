import { FormControlLabel, Radio, RadioGroup, Slider, TextField } from "@material-ui/core";
import React from "react";
import { Base } from "../Base";

export class DishFilter extends Base<{}, State>{

    constructor(props: any){
        super(props);
        this.state = {
            type: 0
        }
    }

    public render(): React.ReactNode{
        return <div className="filter">
            <TextField id="standard-basic" label="Suchbegriff" />
            <Slider
                defaultValue={0.00000005}
                aria-labelledby="discrete-slider-small-steps"
                step={0.00000001}
                marks
                min={-0.00000005}
                max={0.0000001}
                valueLabelDisplay="auto"
            />
            <RadioGroup aria-label="gender" name="gender1" value={this.state.type} onChange={(event: any) => {this.setState({type: event.target.value})}}>
                <FormControlLabel value={0} control={<Radio />} label="Vegetarisch" />
                <FormControlLabel value={1} control={<Radio />} label="Vegan" />
                <FormControlLabel value={2} control={<Radio />} label="Halal" />
            </RadioGroup>
        </div>
    }
}

interface State{
    type: number;
}