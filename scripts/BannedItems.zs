
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.tick.MCPlayerTickEvent; 
import crafttweaker.api.player.MCPlayerEntity; 
import crafttweaker.api.inventory.PlayerInventory; 
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import stdlib.List;


val possibleItems = new List<IItemStack>(); 
possibleItems.add(<item:tombstone:lost_tablet>);


CTEventManager.register<MCPlayerTickEvent>((event) => {

    if (event.isStart()) {
	
        val player = event.player as MCPlayerEntity;
        val inventory = player.getInventory() as PlayerInventory;
	
        for it in possibleItems {
            if (inventory.hasIItemStack(it as IIngredient)) {
                inventory.remove(it);
            }
        }
    }
});