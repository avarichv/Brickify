import React from 'react';

/**
 * Brick contract:
 * 1. Every brickified component should be considered as Shader.
 * 2. There is only two valid props on the shader: data & config.
 * 3. Brickify method append its children as subcomponent's shader.
 * 4. All components should use style "position: static / relative",
 *    and let the outer container to decides its layout.
 */


function getChildrenConfig(children, config) {
    const shader = [];

    if(!Array.isArray(children)) {
        children = [ children ];
    }
    
    children.forEach(child => {
        const { type, props: { children: subNodes, ...subConf }} = child;
        config[type.prototype.name] = !subNodes ? { ...subConf } : getChildrenConfig(subNodes, subConf);
        shader.push(type);
    });

    return { ...config, Shader: !shader[1] ? shader[0] : shader };
}

function brickify(Comp) {
    const brick = (props) => {
        let { data, config, state, children, ...attrs } = props;
        config = {...config, ...attrs};

        if(children) {
            config = getChildrenConfig(children, config);
        }
        
        if(config[Comp.name]) {
            config = { ...config[Comp.name], _parent_: config };
        }

        if(config.matchProps) {
            const match = config.matchProps(data, config, state);
            data = match.data;
            config = match.config || {};
        }

        Object.entries(config).forEach(([k, v]) => {
            if(v instanceof InheritedKey) {
                let parent = config._parent_;
                do {
                    config[k] = parent[v.key];
                    parent = parent._parent_;
                } while(config[k] === undefined && parent);
            }
        });

        return <Comp data={data} config={config} />
    };

    brick.prototype.name = Comp.name;
    return brick;
}

function InheritedKey(key) {
    this.key = key;
}

export const inherits = function(key) {
    return new InheritedKey(key);
};

export const Brickify = function (Comps) {
    const bricks = {};
    if(!Array.isArray(Comps)) { Comps = [ Comps ]; }
    Comps.forEach(c => { bricks[c.name] = brickify(c); });
    return bricks;
};
